import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const id = params.id;
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort');

  return NextResponse.json(
      { message: "Goodbye World!", id, sort },
      { status: 201 });
}