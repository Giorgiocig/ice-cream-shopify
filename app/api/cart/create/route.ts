import { NextResponse } from "next/server";
import { createCart } from "@/app/storefrontApi/createCart";

export async function POST() {
  try {
    const cartRes = await createCart({});
    const cartObj = cartRes.body.data.cartCreate.cart;

    if (!cartObj) {
      return NextResponse.json(
        { error: "Failed to create cart" },
        { status: 500 }
      );
    }
    return NextResponse.json(cartObj);
  } catch (error) {
    console.error("Error creating cart:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
