import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-3xl">Payment Confirmed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-lg">
            Your order is completed successfully
          </p>
          <p className="text-sm text-muted-foreground">
            You will receive an email with the details
          </p>
          <Button size="lg" className="w-full max-w-md">
            <Link href="/"> Come back to the shop</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
