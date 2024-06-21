import {VALUE_SEARCH} from "../action/type";

const initValue = []
const studentReducer = (student = initValue, action) => {
    const {type, payload} = action
    switch (type) {
        case VALUE_SEARCH:
            return payload
        default:
            return student
    }
}
export default studentReducer;
