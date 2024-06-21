import {thunk} from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducer/combine";

const  initStore = {}
const middleWare =[thunk]
const store = createStore(
    rootReducer,
    initStore,
    applyMiddleware(...middleWare)
)
export default store