import { Resend } from "resend";

const globalForResend = globalThis as unknown as {
  resend?: Resend;
};

function getResendClient(): Resend {
  if (globalForResend.resend) return globalForResend.resend;

  const client = new Resend(process.env.RESEND_API_KEY ?? "");

  if (process.env.NODE_ENV !== "production") {
    globalForResend.resend = client;
  }

  return client;
}

function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

interface OrderConfirmationItem {
  productName: string;
  variantLabel: string;
  price: number;
  quantity: number;
}

interface OrderConfirmationInput {
  to: string;
  customerName: string;
  orderNumber: string;
  items: OrderConfirmationItem[];
  subtotal: number;
  shipping: number;
  total: number;
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state: string;
  postalCode: string;
}

export async function sendOrderConfirmationEmail(order: OrderConfirmationInput) {
  const itemsHtml = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px 0;">${item.productName} (${item.variantLabel}) x ${item.quantity}</td>
          <td style="padding:8px 0;text-align:right;">${formatInr(item.price * item.quantity)}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
      <h2>Your order is placed!</h2>
      <p>Hi ${order.customerName}, thanks for shopping with Bavin Ghee. We've received your order and will get it packed and shipped soon.</p>
      <p><strong>Order #${order.orderNumber}</strong></p>
      <table style="width:100%;border-collapse:collapse;">
        ${itemsHtml}
        <tr><td style="padding:8px 0;border-top:1px solid #ddd;">Subtotal</td><td style="padding:8px 0;border-top:1px solid #ddd;text-align:right;">${formatInr(order.subtotal)}</td></tr>
        <tr><td style="padding:8px 0;">Shipping</td><td style="padding:8px 0;text-align:right;">${order.shipping === 0 ? "Free" : formatInr(order.shipping)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Total</td><td style="padding:8px 0;text-align:right;font-weight:bold;">${formatInr(order.total)}</td></tr>
      </table>
      <p style="margin-top:24px;">
        Shipping to:<br />
        ${order.addressLine1}${order.addressLine2 ? `, ${order.addressLine2}` : ""}<br />
        ${order.city}, ${order.state} ${order.postalCode}
      </p>
    </div>
  `;

  await getResendClient().emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Bavin Ghee <onboarding@resend.dev>",
    to: order.to,
    subject: `Order confirmed - ${order.orderNumber}`,
    html,
  });
}

interface ContactNotificationInput {
  name: string;
  email: string;
  message: string;
  inquiryType: string;
}

export async function sendContactNotificationEmail(submission: ContactNotificationInput) {
  const inquiryLabel = submission.inquiryType === "wholesale" ? "Wholesale / Bulk Buyer" : "Retail Customer";

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
      <h2>New contact form submission</h2>
      <p><strong>Type:</strong> ${inquiryLabel}</p>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;">${submission.message}</p>
    </div>
  `;

  await getResendClient().emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Bavin Ghee <onboarding@resend.dev>",
    to: process.env.CONTACT_NOTIFY_EMAIL ?? "hello@bavinghee.com",
    replyTo: submission.email,
    subject: `New ${inquiryLabel.toLowerCase()} inquiry from ${submission.name}`,
    html,
  });
}
