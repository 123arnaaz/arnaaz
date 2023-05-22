//https://codeshare.io/nzZyyY

// https://abc.com/contact/new
// npm i -D react-router-dom


import React from "react";

class Comp extends React.Component{
    constructor(){
        super();
        this.state = {name:'Besant'}
        console.log('This is constructor')
    }
    componentWillMount () {
        console.log('Component Will mount')
    }
    componentDidMount() {
        console.log('Component did mpunt')
    } 
    changeState() {
        this.setState({name:'Besant Technology'})
    }
    render() {
        return(<div>
        <h4>{this.state.name}</h4>
        <button onClick={this.changeState.bind(this)}>Click</button>
        </div>)
    }
}

export default Comp;