import React from "react";
import { Minus, Plus, Trash2, CreditCard, ArrowLeft } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormTextFieldRHF from "./FormTextFieldRHF";

const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(16, "number of your credit card should have 16 numbers")
    .max(19, "Number not valid"),
  cardHolder: z.string().min(3, "your name").max(100, "name too long"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Format: MM/AA")
    .refine((val) => {
      const [month, year] = val.split("/");
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      return expiry > new Date();
    }, "Card is expired"),
  cvv: z
    .string()
    .min(3, "CVV should have 3 numbers")
    .max(4, "CVV not valid")
    .regex(/^\d+$/, "Please insert only number"),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

export default function CreditCardFormRHF() {
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: "XXXXXXXXXXXXXXXX",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
    },
  });
  console.log(form);
  function onSubmit(data: z.infer<typeof paymentSchema>) {
    // Do something with the form values.
    console.log(data);
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-4">
      <div>
        <FieldGroup>
          {/* Card number */}
          <FormTextFieldRHF<PaymentFormData>
            name="cardNumber"
            label="your card number"
            formControl={form.control}
          />
          ;{/* Card Holder */}
          <FormTextFieldRHF<PaymentFormData>
            name="cardHolder"
            label="name of the card holder"
            formControl={form.control}
          />
          <div className="grid grid-cols-2 gap-3">
            {/* Expiration date */}
            <FormTextFieldRHF<PaymentFormData>
              name="expiryDate"
              label="card expiration date"
              formControl={form.control}
            />
            {/* CVV */}
            <FormTextFieldRHF<PaymentFormData>
              name="cvv"
              label="CVV"
              formControl={form.control}
            />
          </div>
        </FieldGroup>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full">
          <Link href="/success">Pay Now</Link>
        </Button>
      </div>
    </form>
  );
}
