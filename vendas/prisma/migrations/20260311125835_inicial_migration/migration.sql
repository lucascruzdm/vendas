-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "endereco" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);
