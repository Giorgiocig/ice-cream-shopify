export const computeTotal = (cartItems: Record<string, any> | undefined) => {
  return cartItems?.reduce((acc: number, currCartItem: Record<string, any>) => {
    return (
      acc +
      currCartItem.node.quantity * currCartItem.node.merchandise.price.amount
    );
  }, 0);
};
