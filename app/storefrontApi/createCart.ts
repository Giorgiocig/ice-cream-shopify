import { shopifyFetch } from "@/utils/fetch-shopify";

const gql = String.raw;

export async function createCart(input: any) {
  return shopifyFetch({
    query: gql`
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: { input },
  });
}
