import studentServices from "../services/studentServices";
import {ADD_NEW_STUDENT, DELETE_STUDENT, EDIT_STUDENT, FIND_STUDENT_BY_ID, GET_ALL_STUDENT} from "./type-action";

export  const getAllStudent =() => async (dispatch)=>{
    try {
        const  res = await studentServices.findAll()
        dispatch({
            type:GET_ALL_STUDENT,
            payload:res.data
        })
    }catch (e) {
        console.log(e)
    }
}
export  const addNew =(student) => async (dispatch)=>{
    try {
        const  res = await studentServices.addNew(student)
        dispatch({
            type:ADD_NEW_STUDENT,
            payload:res.data
        })
    }catch (e) {
        console.log(e)
    }
}
export const deleteStudent = (id)=> async (dispatch) =>{
    try {
         await studentServices.del(id)
        const res =await studentServices.findAll()
        dispatch({
            type:DELETE_STUDENT,
            payload:res.data
        })
    }catch (e) {
        console.log(e)
    }
}
export const editStudent = (id,student)=> async (dispatch) =>{
    try {
        await studentServices.edit(id,student)
        const res =await studentServices.findAll()
        console.log(res.data)
        dispatch({
            type:EDIT_STUDENT,
            payload:res.data
        })
    }catch (e) {
        console.log(e)
    }
}
export  const findStudentById = id => async (dispatch) =>{
    try {
        const  res = await studentServices.findById(id)
        console.log(res.data)
        dispatch({
            type:FIND_STUDENT_BY_ID,
            payload:res.data
        })
    }catch (e) {
        console.log(e)
    }
}