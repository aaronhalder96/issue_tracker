import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "../../validationSchemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const valdiation = createIssueSchema.safeParse(body);
  if (!valdiation.success)
    return NextResponse.json(valdiation.error.errors, { status: 400 });

  const { title, description } = body;

  const newIssue = await prisma.issue.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
