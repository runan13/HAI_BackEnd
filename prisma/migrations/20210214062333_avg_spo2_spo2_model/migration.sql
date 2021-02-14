/*
  Warnings:

  - Added the required column `avgSpo2` to the `Spo2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spo2" ADD COLUMN     "avgSpo2" TEXT NOT NULL;
