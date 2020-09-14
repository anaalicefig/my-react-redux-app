import { all, takeLatest, select, call, put } from "redux-saga/effects";
import {
  addProcuctToCartRequest,
  addProcuctToCartSuccess,
  addProcuctToCartFailure,
} from "./actions";
import { IState } from "../..";
import api from "../../../services/api";
import { AxiosResponse } from "axios";

type CheckProductStockRequest = ReturnType<typeof addProcuctToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select(({ cart }: IState) => {
    return (
      cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0
    );
  });

  const availbleStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availbleStockResponse.data.quantity > currentQuantity) {
    yield put(addProcuctToCartSuccess(product));
  } else {
    yield put(addProcuctToCartFailure(product.id));
  }
}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
