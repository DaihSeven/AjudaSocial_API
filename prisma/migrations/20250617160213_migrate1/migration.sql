-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT[],
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "hours" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);
