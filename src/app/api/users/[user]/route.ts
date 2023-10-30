import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ message: 'id is required.' }, { status: 400 })
  }

  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  })

  if (!user) {
    return NextResponse.json(
      { message: 'resource not found.' },
      { status: 404 },
    )
  }

  return NextResponse.json({ user }, { status: 200 })
}
