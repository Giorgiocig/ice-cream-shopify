import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Cart } from "./Cart";

import { CartItem } from "@/app/utils/interfaces";
import Link from "next/link";

export function Navbar() {
  const items: CartItem[] = [];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="text-xl font-bold">
          Gelato Shop
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/catalog">
            <Button variant="ghost">Catalogo</Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <Cart />
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
