import { shopifyFetch } from "../utils/fetch-shopify";

const gql = String.raw;

export async function cartLinesUpdate(cartId: string, lines: any[]) {
  return shopifyFetch({
    query: gql`
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
            id
            lines(first: 20) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
            estimatedCost {
              totalAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: {
      cartId,
      lines,
    },
  });
}
