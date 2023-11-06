import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const categoryId = searchParams.get('categoryId') || ''
  const q = searchParams.get('q') || ''

  const categoriesCondition = categoryId
    ? {
        some: {
          categoryId,
        },
      }
    : undefined

  const books = await prisma.book.findMany({
    where: {
      categories: categoriesCondition,
      OR: [{ name: { contains: q } }, { author: { contains: q } }],
    },
    include: {
      ratings: {
        include: {
          book: true,
          user: true,
        },
        orderBy: {
          // eslint-disable-next-line camelcase
          created_at: 'desc',
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  return NextResponse.json({ books }, { status: 200 })
}
