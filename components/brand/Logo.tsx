interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-14 w-14" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- served as a plain static file, bypassing the /_next/image proxy some browser extensions block
    <img
      src="/images/brand/logo.png"
      alt="Bavin — Pure Dairy Products"
      className={`object-contain shrink-0 ${className}`}
    />
  );
}
