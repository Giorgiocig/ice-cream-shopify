import { CatalogClient } from "../components/layout/CatalogClient";
import { getAllProducts } from "../storefrontApi";

const Catalog = async () => {
  const response = await getAllProducts();
  return <CatalogClient response={response} />;
};

export default Catalog;
