// pages/api/hello.ts

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// app/helloWorld/route.ts

// Handler for the GET method
export function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextResponse.json({ message: "Hello" });
}

// Handler for the POST method
export function POST(req: NextApiRequest, res: NextApiResponse) {
  // Handle the POST request here
}
