import { cartLinesUpdate } from "@/app/storefrontApi";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cartId, lines } = body;
    if (!cartId || !lines) {
      return NextResponse.json(
        { error: "Missing cartId or lineIds" },
        { status: 400 }
      );
    }
    const res = await cartLinesUpdate(cartId, lines);
    if (!res) {
      return NextResponse.json(
        { error: "Failed to update item" },
        { status: 500 }
      );
    }
    return NextResponse.json(res);
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
