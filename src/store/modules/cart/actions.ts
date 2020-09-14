import { IProduct, ActionTypes } from "./types";

export function addProcuctToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductsToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProcuctToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductsToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProcuctToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductsToCartFailure,
    payload: {
      productId,
    },
  };
}
