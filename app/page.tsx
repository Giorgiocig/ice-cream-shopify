import Image from "next/image";
import { HeroSection } from "./components/layout";
import { getAllProducts } from "./storefrontApi";

export default async function Home() {
  /* const response = await getAllProducts();
  console.log(response); */
  return (
    <div>
      <HeroSection />
    </div>
  );
}
