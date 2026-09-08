-- CreateEnum
CREATE TYPE "InquiryType" AS ENUM ('retail', 'wholesale');

-- AlterTable
ALTER TABLE "ContactMessage" ADD COLUMN     "inquiryType" "InquiryType" NOT NULL DEFAULT 'retail';
