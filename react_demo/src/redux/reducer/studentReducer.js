import {
    ADD_NEW_STUDENT,
    DELETE_STUDENT,
    EDIT_STUDENT,
    FIND_STUDENT_BY_ID,
    GET_ALL_STUDENT
} from "../action/type-action";

const init = []
const studentReducer = (student = init, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_ALL_STUDENT:
            return payload
        case ADD_NEW_STUDENT:
            return [payload,...student]
            // return []
        case DELETE_STUDENT:
            return payload
        case EDIT_STUDENT:
            return payload
        case FIND_STUDENT_BY_ID:
            return payload
        default:
            return student
    }
}
export default studentReducer;