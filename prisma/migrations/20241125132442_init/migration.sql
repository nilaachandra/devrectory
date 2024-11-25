-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('FRAMEWORK', 'LIBRARY', 'DESIGN_TOOL', 'DEV_TOOL', 'LANGUAGE', 'DATABASE', 'TYPOGRAPHY', 'HOSTING', 'DEVOPS', 'UI', 'RESOURCES');

-- CreateTable
CREATE TABLE "Toollist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" "Categories" NOT NULL,
    "isOpenSource" BOOLEAN NOT NULL,
    "isFree" BOOLEAN NOT NULL,
    "isPopular" BOOLEAN NOT NULL,
    "popularityScore" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Toollist_pkey" PRIMARY KEY ("id")
);
