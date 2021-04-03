/*
  Warnings:

  - The `bpUp` column on the `Spo2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bpDown` column on the `Spo2` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Spo2" DROP COLUMN "bpUp",
ADD COLUMN     "bpUp" INTEGER[],
DROP COLUMN "bpDown",
ADD COLUMN     "bpDown" INTEGER[];
