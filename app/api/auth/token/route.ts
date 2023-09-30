import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });
    if (token) {
      return NextResponse.json(token);
    } else {
      // Token not found, possibly due to authentication issue
      return NextResponse.json(
        { error: 'Authentication failed or token not found' },
        { status: 401 }
      );
    }
  } catch (error) {
    // Handle any errors that occurred during token retrieval
    console.error(error);
    return NextResponse.json(
      { error: 'Error retrieving token' },
      { status: 500 }
    );
  }
}
