import { NextResponse } from "next/server";
import data from "@/data/guidelines.json";

export function GET() {
  return NextResponse.json(data);
}
