import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ProgressBar} from "react-loader-spinner";
import {Bounce, toast} from "react-toastify";
import Swal from "sweetalert2";
import * as Yup from "yup";

export function Update() {
    const params = useParams()
    const [student, setStudent] = useState({
        // name: '',
        // age: 0,
        // gender: '1',
        // languages: []
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/students/${params.id}`)
                setStudent(result.data)
                await setIsLoading(false)

            } catch (e) {
                console.log(e)
            }
            console.log(student)
        }
        fetchData()
    }, [])
    const confirmBeforeBack = () => {
        Swal.fire({
            title: `Are you sure to get back?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, get back!"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
            }
        });
    }
    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    ...student
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const createStudent = async (student) => {
                        try {
                            setSubmitting(false)
                            await axios.put(`http://localhost:8080/students/${params.id}`, values)
                            toast.success(`Student ${student.name} Update success.`, {
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
                        navigate('/')
                    }
                    createStudent(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required(`Please input name`)
                        .matches(/^C07_[a-z, A-Z]+$/, 'Format is C07_Nguyen Van A'),
                    age: Yup.number('please input number')
                        .required(`Please input age`)
                        .min(19, 'Min age is 19')
                        .max(100, 'Invalid age')
                })}
            >
                {
                    ({isSubmitting}) => (
                        <div className='container'>
                            <h1>Edit Student</h1>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor='studentName' className='form-label'>Name</label>
                                    <Field type='text' className='form-control' id='studentName'
                                           name='name' autoComplete={'off'}
                                    />
                                    <ErrorMessage name='name' component='span' className='form-error'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='studentAge' className='form-label'>Age</label>
                                    <Field type='number' className='form-control' id='studentAge'
                                           name='age' autoComplete={'off'}
                                    />
                                    <ErrorMessage name='age' component='span' className='form-error'/>

                                </div>
                                <div className='mb-3'>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" id="inlineRadio1"
                                               value="1"
                                               name="gender"
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" id="inlineRadio2"
                                               value="0"
                                               name="gender"
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                                    </div>
                                </div>

                                <label htmlFor='studentAge' className='form-label'>Languages</label>
                                <div className="form-check">
                                    <Field className="form-check-input" type="checkbox" value="C#" id="flexCheckDefault"
                                           name='languages'
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        C#
                                    </label>
                                </div>
                                <div className="form-check">
                                    <Field className="form-check-input" type="checkbox" value="JAVA" id="cb1"
                                           name='languages'/>
                                    <label className="form-check-label" htmlFor="cb1">
                                        JAVA
                                    </label>
                                </div>
                                <div className="form-check">
                                    <Field className="form-check-input" type="checkbox" value="ReactJS" id="cb2"
                                           name='languages'/>
                                    <label className="form-check-label" htmlFor="cb2">
                                        ReactJS
                                    </label>
                                </div>

                                {
                                    isSubmitting ?
                                        <ProgressBar
                                            visible={true}
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="progress-bar-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />
                                        : (
                                            <>
                                                <button type='submit' className='btn btn-outline-primary'>Update</button>
                                                <button type='button' className="btn btn-outline-success"
                                                        onClick={confirmBeforeBack}>Cancel
                                                </button>
                                            </>
                                        )


                                }
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )

}