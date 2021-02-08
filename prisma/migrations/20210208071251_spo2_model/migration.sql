-- CreateTable
CREATE TABLE "Spo2" (
    "id" SERIAL NOT NULL,
    "minSpo2" TEXT NOT NULL,
    "maxSpo2" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Spo2Relation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Spo2Relation_AB_unique" ON "_Spo2Relation"("A", "B");

-- CreateIndex
CREATE INDEX "_Spo2Relation_B_index" ON "_Spo2Relation"("B");

-- AddForeignKey
ALTER TABLE "_Spo2Relation" ADD FOREIGN KEY ("A") REFERENCES "Spo2"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Spo2Relation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
