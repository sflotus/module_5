import axios from "axios";
import {VALUE_SEARCH} from "./type";

export const findStudent =(value) => async (dispatch) =>{
    // const  URL =http://localhost:8080/students?
    try {
        const  res = value !=='' ? await axios.get(`http://localhost:8080/students?q=${value}`) : await axios.get(`http://localhost:8080/students?q=`)
        dispatch({
            type:VALUE_SEARCH,
            payload:res.data
        })
    }catch (e) {
        console.log(e)
    }
}