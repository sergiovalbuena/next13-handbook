import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const id = params.id
  const { searchParams } = request.nextUrl
  const sort = searchParams.get('sort') //URL?sort=asc
  return NextResponse.json({ message: "Goodbye World!", id, sort },
                            { status: 201 }
  );
}