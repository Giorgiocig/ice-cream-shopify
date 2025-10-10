"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List } from "lucide-react";
import CardProduct from "../commons/CardProduct";
import { categories } from "@/app/utils/constants";
import { ProductNodeType, ProductType } from "@/app/utils/types";
import { CatalogClientProps } from "@/app/utils/interfaces";

export const CatalogClient = ({ response, cart }: CatalogClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const arrOfProducts: ProductNodeType[] = response.body.data.products.edges;
  console.log(arrOfProducts);
  const arrOfProductsCleaned = arrOfProducts.map((product) => product.node);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-25 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            Il Nostro Catalogo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri tutti i nostri gusti artigianali, preparati ogni giorno con
            ingredienti di prima qualità
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                    : "border-pink-300 text-pink-600 hover:bg-pink-50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              {viewMode === "grid" ? (
                <List className="w-4 h-4" />
              ) : (
                <Grid className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 lg:grid-cols-2"
          }`}
        >
          {arrOfProductsCleaned.map((product, idx: number) => (
            <CardProduct key={idx} product={product} cart={cart} />
          ))}
        </div>
      </div>
    </div>
  );
};
