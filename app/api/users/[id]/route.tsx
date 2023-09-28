import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch from db
  //if not found, return 404 error
  if (params.id > 10)
    return NextResponse.json(
      { error: 'Opps! User not found' },
      { status: 404 }
    );
  //else return data
  return NextResponse.json({ id: 1, name: 'Mosh' });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate the request body
  // if invalid, return 400
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // fetch user with the given id
  // if doesn't exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  // update user in db
  // return updated user
  return NextResponse.json({ id: 1, name: 'Mosh' });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch user from db
  // if not found return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  // delete user
  // return 200
  return NextResponse.json({});
}
