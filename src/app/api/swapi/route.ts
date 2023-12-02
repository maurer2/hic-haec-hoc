import { NextRequest, NextResponse } from "next/server";

// https://swapi.dev/api/people/
import peopleJSON from './people.json'

export async function GET(request: NextRequest, context) {
  console.log(context);
  return NextResponse.json(peopleJSON);
}

// https://github.com/vercel/next.js/discussions/47933#discussioncomment-6197807
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
