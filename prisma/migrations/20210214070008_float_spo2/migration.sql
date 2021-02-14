/*
  Warnings:

  - Changed the type of `minSpo2` on the `Spo2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `maxSpo2` on the `Spo2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `avgSpo2` on the `Spo2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Spo2" DROP COLUMN "minSpo2",
ADD COLUMN     "minSpo2" DECIMAL(65,30) NOT NULL,
DROP COLUMN "maxSpo2",
ADD COLUMN     "maxSpo2" DECIMAL(65,30) NOT NULL,
DROP COLUMN "avgSpo2",
ADD COLUMN     "avgSpo2" DECIMAL(65,30) NOT NULL;
