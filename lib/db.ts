import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

//This db variable will help us fetching
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
