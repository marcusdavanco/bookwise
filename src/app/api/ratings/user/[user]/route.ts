import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.pathname.split('/').pop()

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      user: true,
      book: true,
    },
    orderBy: {
      // eslint-disable-next-line camelcase
      created_at: 'desc',
    },
  })

  return NextResponse.json({ ratings }, { status: 200 })
}
