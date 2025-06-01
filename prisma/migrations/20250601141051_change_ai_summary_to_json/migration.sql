/*
  Warnings:

  - The `ai_summary` column on the `blog_post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "blog_post" DROP COLUMN "ai_summary",
ADD COLUMN     "ai_summary" JSONB;
