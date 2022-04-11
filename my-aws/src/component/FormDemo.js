import { useState } from "react";
import ReactDom from "react-dom";


function FormDemo(){
     
    const [inputs,setInputs]=useState([]);

    const handleChange =(event) =>
    {
        const name = event.target.name;
        const value =event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        
        alert({inputs});
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter the Name : 
                <input 
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}/>
            </label>
            <label>Enter your age :
                <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
                />                 
            </label>
            <label>
                <input type="submit"/>
            </label>

        </form>
    )
}

export default FormDemo;