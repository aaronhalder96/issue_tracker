import { Status } from "@prisma/client";

const getStatus = (status: Status) => {
  const statuses = Object.values(Status);
  return statuses.includes(status) ? status : undefined;
};

export default getStatus;
