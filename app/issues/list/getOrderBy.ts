import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";

const getOrderBy = (orderBy: keyof Issue) => {
  const fields = Object.keys(prisma.issue.fields);
  return fields.includes(orderBy) ? { [orderBy]: "asc" } : undefined;
};

export default getOrderBy;
