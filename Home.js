import React from "react";
import App from './App';
import demo from './home.module.css'
//import { ReactDOM } from "react-dom";
// function Home() {
//     //logic
//     return (
//         <>
//         <App restaurantName={this.props} ></App>
//        <tr>
//                <td>
//                    <div>
//                     <image src="http://"></image>
//                     <image></image>
//                        <label>{this.props.name}</label>
//                    </div>
//                    <div>
//                        <label>{this.props.category}</label>
//                    </div>
//                    <div>
//                        <label>{this.props.Address}</label>
//                    </div>
//                    <div>
//                        <label>{this.props.Rating}</label>
//                    </div>
//                </td>
//            </tr>
//        </>       
//     );
// }
const myStyle = {
    color : "blue",
    backgroundColor : "green"
}
class Home extends React.Component{
    constructor(){
        super();
        this.changeStyle = this.changeStyle.bind(this);

    }
    changeBrand = () => {
        this.setState({brand:'Audi'})
    }

    changeStyle = (a, b) => {
        var mydiv = document.getElementById('root1');
        alert(b.type);
        alert(a);
       // var ele = ReactDOM.findDOMNode(mydiv);//.style.color = 'blue';
    }

    render() {
        return (
        <div>
            <h1 id='root1' style={{color:"red", backgroundColor:"lightblue"}}>Hello Home Page</h1>
            <h1 style={myStyle}>New Text</h1>
            <h1 className={{demo}}>New Text</h1>
            <button onClick={(event) => this.changeStyle('Hello', event)}>Click</button>
        </div>
        )         
    }

    login() {
        alert('Hi');
    }
}

Home.defaultProps = {
    skills : "Python"
}
export default Home;

// Properties
// Events
// States

// useState()

// Define State
// 1. Declare a default set of values for defining component's initial state.
    // a. Add a constructor and assign an initital state
// 2. always use setState method to change the state object. It will ensure that 
// the component gets updated and call the render method (invike the lifecycle)
// Conditional redering