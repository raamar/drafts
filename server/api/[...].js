import { createRouter, defineEventHandler, useBase } from "h3";
import { PrismaClient } from "@prisma/client";

const router = createRouter();
const prisma = new PrismaClient();

router.get(
  "/warehouses",
  defineEventHandler(async (event) => {
    return await prisma.warehouse.findMany();
  })
);

export default useBase("/api", router.handler);
