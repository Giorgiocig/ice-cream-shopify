"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

import { Separator } from "@radix-ui/react-separator";
import CreditCardFormRHF from "../components/commons/CreditCardFormRHF";

type Props = {};

export default function page({}: Props) {
  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Pagamento (demo)</CardTitle>
      </CardHeader>
      <CreditCardFormRHF />
      <CardContent>
        <Separator className="my-4" />
        <div className="text-xl text-muted-foreground">
          <p>THIS MODULE IS ONLY FOR DEMO PURPOSE TO SHOW FORM VALIDATION. </p>
        </div>
      </CardContent>

      <CardFooter />
    </Card>
  );
}
