import { IProduct } from "./types";

export function addProcuctToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}
