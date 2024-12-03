import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { toolFormSchema } from "@/lib/schema"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Parse and validate the request body
    const body = await req.json()
    const validatedData = toolFormSchema.parse(body)

    // Create the tool in the database
    const createdTool = await db.toollist.create({
      data: validatedData,
    })

    console.log("Created tool:", createdTool)

    // Return the created tool data
    return NextResponse.json(createdTool, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

