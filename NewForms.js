import React from 'react';
import ReactDOM from 'react-dom/client'
import { useState } from 'react';

function MyForm() {
    //const [name, setName] = useState("");
    const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }
    const handleSubmit = (event) => {
        var name = inputs.username;
        alert(`Welcome : ${JSON.stringify(inputs)}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter the name</label>
            <input type='text' name='username' value={inputs.name} onChange={handleChange}/>
           <br></br>
            <label>Enter the Age</label>
            <input type='number' name='age' value={inputs.age} onChange={handleChange}/>
       <br></br>
       <input type="submit"></input>
        </form>
    )
}

export default MyForm;




