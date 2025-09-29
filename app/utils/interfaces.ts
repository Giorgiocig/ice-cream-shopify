import { bestFlavor } from "./types";

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

type ComponentType = "blocks.hero-section" | "blocks.info-block";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  bestFlavor: bestFlavor[];
  cta: LinkProps;
  featuredFlavors: string[];
  featuredFlavorsTitle: string;
  heading: string;
  subHeading: string;
  image: ImageProps;
}
