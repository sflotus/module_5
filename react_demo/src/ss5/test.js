import {ErrorMessage, Field, Form} from "formik";
import {ProgressBar} from "react-loader-spinner";

{
    ({isSubmitting}) => (
        <div className='container'>
            <h1>Create Student</h1>
            <Form>
                <div className='mb-3'>
                    <label htmlFor='studentName' className='form-label'>Name</label>
                    <Field type='text' className='form-control' id='studentName'
                           name='name'
                    />
                    <ErrorMessage name='name' component='span' className='form-error'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='studentAge' className='form-label'>Age</label>
                    <Field type='number' className='form-control' id='studentAge'
                           name='age'
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