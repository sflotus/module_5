import {Component} from "react";
import './Student.css';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            student: {
                id: '',
                name: '',
                age: 0,
                address: ''
            },
            list: []
        }
    }

    addNewStudent = () => {
        let student = this.state.student
        console.log(this.state.student)
        this.setState(preState => ({
            ...preState,
            list: [...preState.list, this.state.student],
        }))
    }

    render() {
        return (
            <>
                <table>
                    <tr>
                        <td>ID:</td>
                        <td><input type="text"
                                   onChange={event => {
                                       this.setState(prestate => ({
                                           student: {
                                               ...prestate.student,
                                               id: event.target.value
                                           }
                                       }))
                                   }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text"
                                   onChange={event => {
                                       this.setState(prestate => ({
                                           student: {
                                               ...prestate.student,
                                               name: event.target.value
                                           }
                                       }))
                                   }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td><input type="text"
                                   onChange={event => {
                                       this.setState(prestate => ({
                                           student: {
                                               ...prestate.student,
                                               age: event.target.value
                                           }
                                       }))
                                   }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text"
                                   onChange={event => {
                                       this.setState(prestate => ({
                                           student: {
                                               ...prestate.student,
                                               address: event.target.value
                                           }
                                       }))
                                   }}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={() => {
                                this.addNewStudent()
                                console.log(this.state)
                            }}>Add
                            </button>
                        </td>
                    </tr>
                </table>
                <table style={{border :" 1px solid"}}>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                        {this.state.list.map((std) => (
                            <tr>
                                <td>{std.id}</td>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.address}</td>
                            </tr>
                        ))}
                </table>
            </>
        )
    }

}

export default Student;
