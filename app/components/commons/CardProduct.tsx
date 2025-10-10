import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardProductProps } from "@/app/utils/interfaces";

export const CardProduct = ({ product }: CardProductProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      {/* Image Section */}
      <div className="relative bg-gradient-to-br from-pink-100 via-orange-50 to-blue-100 p-8 flex items-center justify-center ">
        {/* <Image
          className="text-6xl group-hover:scale-110 transition-transform duration-300 h-[200px]"
          src={product.images.nodes[0].src}
          alt="image of the flavor"
          width={300}
          height={300}
        /> */}
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            {product.title}
          </h3>
          <div className="text-right">
            <div className="text-xl font-bold text-gray-800">
              {product.priceRange.minVariantPrice.amount}EUR
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <Button onClick={() => console.log("oisjdf")}>CLICK TO ORDER</Button>
      </CardFooter>
    </Card>
  );
};
