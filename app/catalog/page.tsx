import { CatalogClient } from "../components/layout/CatalogClient";
import { getAllProducts } from "../storefrontApi";
import { createCart } from "../storefrontApi/createCart";

const Catalog = async () => {
  // const cart = await createCart({});
  // console.log(cart);
  const response = await getAllProducts();
  return <CatalogClient response={response} />;
};

export default Catalog;
