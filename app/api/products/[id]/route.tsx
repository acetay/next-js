import { NextRequest, NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch from db
  //if not found, return 404 error
  if (params.id > 10)
    return NextResponse.json(
      { error: 'Opps! Product not found' },
      { status: 404 }
    );
  //else return data
  return NextResponse.json({ id: 1, name: 'Milk', price: '2.5' });
}
