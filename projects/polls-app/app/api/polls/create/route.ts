import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { polls, options, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const { title, description, created_by, pollOptions } = await req.json();

  if (!title || !created_by || !pollOptions || !Array.isArray(pollOptions)) {
    return NextResponse.json(
      { error: "Missing required fields or pollOptions not an array" },
      { status: 400 }
    );
  }

  // ✅ Check if user exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.id, created_by));
  if (existingUser.length === 0) {
    return NextResponse.json({ error: "User does not exist" }, { status: 404 });
  }

  // Insert poll
  const [poll] = await db
    .insert(polls)
    .values({ title, description, created_by })
    .returning();

  // Insert options
  for (const text of pollOptions) {
    await db.insert(options).values({ poll_id: poll.id, text });
  }

  return NextResponse.json({ pollId: poll.id }, { status: 201 });
}
