/*
  Warnings:

  - You are about to drop the column `markdown` on the `Music` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Music" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "previewUrl" TEXT,
    "link" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Music" ("createdAt", "description", "image", "link", "previewUrl", "slug", "title", "updatedAt") SELECT "createdAt", "description", "image", "link", "previewUrl", "slug", "title", "updatedAt" FROM "Music";
DROP TABLE "Music";
ALTER TABLE "new_Music" RENAME TO "Music";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
