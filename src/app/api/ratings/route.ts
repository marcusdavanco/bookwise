import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

import { z } from 'zod'

export async function GET() {
  const ratings = await prisma.rating.findMany()

  return NextResponse.json({ ratings }, { status: 200 })
}

export async function POST(req: NextRequest) {
  try {
    const registerBodySchema = z.object({
      description: z.string().max(450),
      rate: z.number(),
      book_id: z.string(),
      user_id: z.string(),
    })

    const parsedRating = registerBodySchema.parse(req.body)

    const rating = await prisma.rating.create({
      data: parsedRating,
    })

    return NextResponse.json({ rating }, { status: 203 })
  } catch {
    return NextResponse.json(
      { message: 'Invalid request body.' },
      { status: 400 },
    )
  }
}
