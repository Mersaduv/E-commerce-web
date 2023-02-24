export function checkCart(product, carts) {
    return carts.find((cart) => cart.id === product.id);
  }
  