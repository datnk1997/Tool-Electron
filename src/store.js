import {createStore, applyMiddleware} from "redux"
import {rootReducer} from "./reducers/rootReducer"
import {middleware} from "./middleware"
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"

const initState = {};

// logger apply to development mode
// if (process.env.NODE_ENV === "development") {
//   console.log("Development Mode")
// }
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === "development",
});

export const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(
    middleware,
    thunk,
    loggerMiddleware,
  )
);
