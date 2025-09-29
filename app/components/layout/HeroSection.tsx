import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, ChefHat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../../public/myIceCreamHero.jpeg";

const featuredFlavors = ["mango", "pomelo", "Lemon", "Chocolate"];
const bestFlavors = [
  { name: "Strawberry", description: "Gustoso" },
  { name: "Chocolate", description: "Goloso" },
  { name: "Lemon", description: "Fresco" },
  { name: "Coco", description: "Esotico" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-blue-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="hero image"
          width={1920}
          height={20}
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-orange-100/30 to-blue-200/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          {/* Special Offer Badge */}
          <div className="flex justify-center lg:justify-start">
            <Badge
              variant="secondary"
              className="text-sm font-medium px-4 py-2 shadow-lg"
            >
              <Star className="w-4 h-4 mr-2 text-pink-600" />
              "Spedizione gratuita sopra €25"
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
              My Ice Cream
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl">
              Gelati preparati solo con ingredienti freschi e genuini
            </p>
          </div>

          {/* Featured Flavors */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <ChefHat className="w-5 h-5 text-pink-600" />
              <span className="text-lg font-medium text-gray-800">
                I nostri migliori gelati:
              </span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {featuredFlavors.map((flavor, index) => (
                <Badge
                  key={flavor}
                  variant="outline"
                  className={`px-3 py-2 text-sm font-medium border-2 transition-all duration-300 hover:scale-105 ${
                    index === 0
                      ? "border-pink-400 bg-pink-100"
                      : index === 1
                      ? "border-orange-300 bg-orange-50"
                      : index === 2
                      ? "border-amber-600 bg-amber-100"
                      : "border-green-400 bg-green-100"
                  }`}
                >
                  {flavor}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Aggiungi un gusto
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Link href="/catalog">Scopri Menu Completo</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-2 font-medium">4.9/5 da 500+ recensioni</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">1000+ clienti soddisfatti</span>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="flex-1 lg:pl-12 mt-12 lg:mt-0">
          <div className="relative">
            {/* Floating Cards */}
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              {bestFlavors.map((bestF, indx) => (
                <div
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  key={indx}
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 
                      ${bestF.name === "Strawberry" && "bg-pink-400"} 
                      ${bestF.name === "Chocolate" && "bg-amber-600"}
                      ${bestF.name === "Lemon" && "bg-green-400"}
                      ${
                        bestF.name === "Coco" && "bg-orange-200"
                      } rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {bestF.name === "Strawberry" && "🍓"}
                      {bestF.name === "Chocolate" && "🍫"}
                      {bestF.name === "Lemon" && "🍋"}
                      {bestF.name === "Coco" && "🍨"}
                    </div>
                    <h3 className="font-semibold text-gray-800">
                      {bestF.name}
                    </h3>
                    <p className="text-sm text-gray-600">{bestF.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-green-300/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-orange-200/40 rounded-full blur-lg animate-pulse" />
    </section>
  );
}
