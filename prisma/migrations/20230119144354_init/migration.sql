-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productDescription" TEXT NOT NULL,
    "costPrice" REAL NOT NULL,
    "sellPrice" REAL NOT NULL,
    "relevance" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_hash_key" ON "Users"("hash");
