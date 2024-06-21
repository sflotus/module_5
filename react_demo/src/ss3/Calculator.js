import {Component} from "react";

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            numA: 0, numB: 0, operator: "", result: 0,
        }
    }

    cal = ( op) => {
        let a=this.state.numA
        let b=this.state.numB
        let result
        switch (op) {
            case "add":
                result = a + b;
                break
            case "minus":
                result = a - b
                break
            case "multi":
                result = a * b
                break
            case "div":
                if (b!==0) {
                    result = a/b
                } else result = "không thể chia cho số 0"

        }
        this.setState({result})
    }

    render() {
        return (<>
                <table>
                    <tbody>
                    <tr>
                        <td>Number A:</td>
                        <td>
                            <input type="number" step='any' onChange={event => {
                                this.setState({numA: parseInt(event.target.value)})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Number B:</td>
                        <td>
                            <input type="number" step='any' onChange={event => {
                                this.setState({numB: parseInt(event.target.value)})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="button" value='Add' onClick={() => {
                                this.cal("add")
                            }}/>
                            <input type="button" value='Minus' onClick={() => {
                                this.cal("minus")
                            }}/>
                            <input type="button" value='Multi' onClick={() => {
                                this.cal("multi")
                            }}/>
                            <input type="button" value='Div' onClick={() => {
                                this.cal("div")
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Result:</td>
                        <td>{this.state.result}</td>
                    </tr>
                    </tbody>
                </table>
        </>)
    }
}

export default Calculator;