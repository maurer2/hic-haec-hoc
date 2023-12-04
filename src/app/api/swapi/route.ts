import { NextRequest, NextResponse } from "next/server";

// https://swapi.dev/api/people/
// import peopleJSON from './people.json';

const baseUrl = new URL('https://swapi.dev/api/');

export async function GET(request: NextRequest, context: {[key: string]: unknown}) {
  const url = Object.hasOwn(context, 'params') ? {} : context?.params;
  const finalURL = Boolean(url) && typeof url === 'string' ? url : baseUrl.toString();

  const response = await fetch(finalURL, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response;
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
