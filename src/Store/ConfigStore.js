import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "AsyncStorage";
import thunk from "redux-thunk";

import rootReducer from "../Redux/Reducer/";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["form"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
