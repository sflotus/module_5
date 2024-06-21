import request from '../axios-config'
const findAll = ()=>{
    return request.get('/students')
}
const addNew = (student)=>{
    return request.post('/students',student)
}
const del = (id)=>{
    return request.delete(`/students/${id}`)
}
const edit = (id,student)=>{
    return request.put(`/students/${id}`,student)
}
const findById = (id)=>{
    return request.get(`/students/${id}`)
}
const studentServices ={
    findAll,
    addNew,
    del,
    edit,
    findById
}
export default studentServices