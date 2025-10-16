"use client";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Cart } from "./Cart";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
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

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-4 w-4 " />
              </Button>
            </SheetTrigger>
            <Cart />
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
