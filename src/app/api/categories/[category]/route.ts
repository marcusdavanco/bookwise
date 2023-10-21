import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ message: 'id is required.' }, { status: 400 })
  }

  const category = prisma.category.findFirst({
    where: {
      id,
    },
  })

  if (!category) {
    return NextResponse.json(
      { message: 'resource not found.' },
      { status: 404 },
    )
  }

  return NextResponse.json({ category }, { status: 200 })
}
