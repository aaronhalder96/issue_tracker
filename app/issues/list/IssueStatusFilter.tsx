"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import getStatus from "./getStatus";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const validStatus = searchParams.get("status")
    ? getStatus(searchParams.get("status") as Status)
    : undefined;

  return (
    <Select.Root
      defaultValue={validStatus}
      onValueChange={(status) => {
        status && status !== "ALL"
          ? params.set("status", status)
          : params.delete("status");
        const query = params.size ? "?" + params.toString() : "";
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses?.map((status) => (
          <Select.Item key={status.label} value={status.value || "ALL"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
