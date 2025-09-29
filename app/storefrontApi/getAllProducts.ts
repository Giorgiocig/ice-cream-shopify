import { shopifyFetch } from "../utils/fetch-shopify";

const gql = String.raw;

export async function getAllProducts() {
  return shopifyFetch({
    query: gql`
      query ShopName {
        products(first: 4) {
          edges {
            node {
              title
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                nodes {
                  src
                }
              }
              description
            }
          }
        }
      }
    `,
  });
}
