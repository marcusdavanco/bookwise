import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

import { z } from 'zod'

export async function GET() {
  const ratings = await prisma.rating.findMany()

  return NextResponse.json({ ratings }, { status: 200 })
}

export async function POST(req: NextRequest) {
  const registerBodySchema = z.object({
    description: z.string().max(450),
    rate: z.number(),
    book_id: z.string(),
    user_id: z.string(),
  })

  try {
    const parsedRating = registerBodySchema.parse(await req.json())

    const rating = await prisma.rating.create({
      data: parsedRating,
    })

    return NextResponse.json({ rating }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'invalid body type.' }, { status: 400 })
  }
}
