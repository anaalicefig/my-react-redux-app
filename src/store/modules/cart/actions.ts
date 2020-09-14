import { IProduct } from "./types";

export function addProcuctToCartRequest(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product,
    },
  };
}

export function addProcuctToCartSuccess(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product,
    },
  };
}

export function addProcuctToCartFailure(productId: number) {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: {
      productId,
    },
  };
}
