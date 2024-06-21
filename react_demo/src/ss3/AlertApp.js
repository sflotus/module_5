import {Component} from "react";

class AlertApp extends Component{
    constructor() {
        super();
        this.state = {
            mess : ''
        }
    }
    changerHandle = input =>{
        this.setState({mess:input})
    }
    render() {
        return(
            <>
                <input type="text" onChange={event => this.changerHandle(event.target.value)}/>
                <button onClick={()=>{alert(this.state.mess)}}>Alert</button>
            </>
        )
    }
}
export default AlertApp;