import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ message: 'id is required.' }, { status: 400 })
  }

  const requestRating = req.body

  const originalRating = await prisma.rating.findFirst({
    where: {
      id,
    },
  })

  if (!originalRating) {
    return NextResponse.json(
      { message: 'resource not found.' },
      { status: 404 },
    )
  }

  const rating = { ...originalRating, ...requestRating }

  await prisma.rating.update({
    where: {
      id,
    },
    data: rating,
  })

  return NextResponse.json({ message: 'rating updated.' }, { status: 200 })
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ message: 'id is required.' }, { status: 400 })
  }

  const rating = prisma.rating.findUnique({
    where: {
      id,
    },
  })

  if (!rating) {
    return NextResponse.json(
      { message: 'resource not found.' },
      { status: 404 },
    )
  }

  await prisma.rating.delete({
    where: {
      id,
    },
  })

  return NextResponse.json({ message: 'rating removed.' }, { status: 404 })
}
