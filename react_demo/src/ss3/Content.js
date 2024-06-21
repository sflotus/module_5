import {Component} from "react";

class Content extends Component{
    constructor(props) {
        super(props);
        this.state={
            isExpand : false,
        }
    }
    handleClick =()=>{
        this.setState(preState =>({
            isExpand:!preState.isExpand
        }))
        console.log(this.state.isExpand)
    }
    // render() {
    //     return(
    //         <>
    //             <h1>Conditional Rendering</h1>
    //             {this.state.isExpand ? (
    //                 <div>
    //                     <button onClick={this.handleClick}>Đóng giới thiệu</button>
    //                     <p>Nội dung giới thiệu</p>
    //                 </div>
    //             ) : (
    //                 <button onClick={this.handleClick}>Xem giới thiệu</button>
    //             )}
    //         </>
    //     )
    // }
    render() {
        return(
            // <>
            //     <button onClick={this.handleClick}>Click Me</button>
            //     {this.state.isExpand ? (<p>Open</p>):(<p>Close</p>)}
            // </>
            <>

                <button onClick={()=>this.handleClick()}>Click Me</button>
                {this.state.isExpand ? (<p>Open</p>):(<p>Close</p>)}
            </>
        )
    }
}

export default Content;