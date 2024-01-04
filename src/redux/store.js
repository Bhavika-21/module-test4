import { createStore } from "redux";
import homeReducer from "./reducers/homeReducer";

const store = createStore(homeReducer)

export default store