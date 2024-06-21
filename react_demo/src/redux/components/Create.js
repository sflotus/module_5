import {ProgressBar} from "react-loader-spinner";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Bounce, toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {addNew} from "../action/student-action";
import {useDispatch} from "react-redux";


export function Create() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    return (
        <>
            <Formik initialValues={{
                name: '',
                age: '',
                gender: '1',
                languages: []
            }}
                    onSubmit={(values, {setSubmitting}) => {
                        const createStudent = async (student) => {
                            try {
                                setSubmitting(false)
                                dispatch(addNew(student))
                                toast.success(`Student ${student.name} create success.`, {
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
                            <h1>Create Student</h1>
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
                                        :
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                }
                            </Form>
                        </div>
                    )
                }

            </Formik>


        </>
    )
}