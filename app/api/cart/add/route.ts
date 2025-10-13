import { cartLinesAdd } from "@/app/storefrontApi";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cartId, lines } = body;
    const cartRes = await cartLinesAdd(cartId, lines);
    if (!cartRes) {
      return NextResponse.json(
        { error: "Failed to create cart" },
        { status: 500 }
      );
    }
    return NextResponse.json(cartRes);
  } catch (error) {
    console.error("Error adding item:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
