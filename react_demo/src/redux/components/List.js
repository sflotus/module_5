import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import Swal from "sweetalert2";
import {useDispatch, useSelector} from "react-redux";
import {deleteStudent, getAllStudent} from "../action/student-action";


// Default values shown
export function List() {
    const students = useSelector(state => state.students)
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [isGetList, setIsGetList] = useState(false)
    useEffect(() => {
        dispatch(getAllStudent())
        console.log(students)
    }, [isGetList])
    const confirmBeforeDelete = (name, id) => {
        Swal.fire({
            title: `Are you sure delete ${name}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                delStudent(id)
                toast.warn(`Deleted Success.`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        });

    }
    const delStudent = async (id) => {
        try {
            await dispatch(deleteStudent(id))
            await setIsGetList(prevState => !prevState)
        } catch (e) {
            toast.error(`Error: ${e}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
    return (
        <>
            <table className="table table-hover table-striped" id="tableStudent">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>languages</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {isLoading ? (
                    <div>
                        ....Loading
                    </div>
                ) : (
                    <>
                        {!students.length ? (
                            <tr>
                                <td colSpan={5} style={{textAlign: "center"}}>List student is empty</td>
                            </tr>
                        ) : (
                            students.map((student, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.gender == 1 ? 'Male' : 'Female'}</td>
                                    <td>{student.languages.map((language, i) => (
                                        <span key={i}>{language}, </span>))}</td>
                                    <td>
                                        <NavLink to={"/update/" + student.id}
                                                 className="btn btn-outline-success">Edit</NavLink>
                                        <button className="btn btn-outline-danger"
                                                onClick={() => confirmBeforeDelete(student.name, student.id)}>Deleted
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </>
                )}
                </tbody>
            </table>
        </>
    )
}