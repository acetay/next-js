import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { prisma } from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //fetch from db
  //if not found, return 404 error
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json(
      { error: 'Opps! User not found' },
      { status: 404 }
    );
  //else return data
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate the request body
  // if invalid, return 400
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // fetch user with the given id
  // if doesn't exist, return 404
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  // update user in db
  // return updated user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // fetch user from db
  // if not found return 404
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  // delete user
  // return 200

  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
}
