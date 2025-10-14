import { cartLinesRemove } from "@/app/storefrontApi";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cartId, lineIds } = body;
    if (!cartId || !lineIds) {
      return NextResponse.json(
        { error: "Missing cartId or lineIds" },
        { status: 400 }
      );
    }
    const cartRes = await cartLinesRemove(cartId, lineIds);
    if (!cartRes) {
      return NextResponse.json(
        { error: "Failed to delete item" },
        { status: 500 }
      );
    }
    return NextResponse.json(cartRes);
  } catch (error) {
    console.error("Error creating cart:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
