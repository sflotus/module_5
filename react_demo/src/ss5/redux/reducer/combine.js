import studentReducer from "./reducer";
import {combineReducers} from "redux";
export const rootReducer = combineReducers({
    students: studentReducer
})