"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Trash2, CreditCard, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";

const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(16, "Il numero della carta deve contenere 16 cifre")
    .max(19, "Numero carta non valido")
    .regex(/^[\d\s]+$/, "Inserisci solo numeri"),
  cardHolder: z
    .string()
    .min(3, "Inserisci il nome del titolare")
    .max(100, "Nome troppo lungo"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Formato: MM/AA")
    .refine((val) => {
      const [month, year] = val.split("/");
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      return expiry > new Date();
    }, "Carta scaduta"),
  cvv: z
    .string()
    .min(3, "CVV deve contenere 3 cifre")
    .max(4, "CVV non valido")
    .regex(/^\d+$/, "Inserisci solo numeri"),
});

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";

type Props = {};

export default function page({}: Props) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Pagamento (demo)</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={() => console.log("submit")} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome sul documento</Label>
            <Input id="name" placeholder="Mario Rossi" />
          </div>

          <div>
            <Label htmlFor="number">Numero carta</Label>
            <Input
              id="number"
              inputMode="numeric"
              placeholder="4242 4242 4242 4242"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="expiry">Scadenza (MM/AA)</Label>
              <Input id="expiry" placeholder="MM/AA" />
            </div>

            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" inputMode="numeric" placeholder="123" />
            </div>
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full">
              {/* {loading ? "Elaborazione..." : "Paga ora (demo)"} */}
            </Button>
          </div>
        </form>

        <Separator className="my-4" />

        <div className="text-xl text-muted-foreground">
          <p>THIS MODULE IS ONLY FOR DEMO PURPOSE TO SHOW FORM VALIDATION. </p>
        </div>
      </CardContent>

      <CardFooter />
    </Card>
  );
}
