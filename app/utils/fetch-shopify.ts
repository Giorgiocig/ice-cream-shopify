type ShopifyResponse = {
  status: number;
  body?: any;
  error?: string;
};

export async function shopifyFetch({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<ShopifyResponse> {
  try {
    const result = await fetch(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-07/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        },
        body: JSON.stringify({ query, variables }),
      }
    );

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
