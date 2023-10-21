import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.pathname.split('/').pop()

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
  })

  return NextResponse.json({ ratings }, { status: 200 })
}
