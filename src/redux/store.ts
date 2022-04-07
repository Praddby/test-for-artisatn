import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { produtReducer } from "./reducers/products";
import { rootSaga } from "./sagas";

export type RootState = ReturnType<typeof reducer>;

const reducer = combineReducers({
  products: produtReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);