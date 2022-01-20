import React, {useState} from 'react';

function Submit() {

    const [inputField , setInputField] = useState({
        data: ''
    })

    const inputsHandler = (e) =>{
        setInputField({data: e.target.value} )
    }

    const submitButton = () =>{
        fetch('http://localhost:8000/api/add-new-post', {
            method: 'POST',
            body: JSON.stringify(inputField),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
    }

    return (
        <div>
            <br/>

            <input 
            type="text" 
            name="data" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.data}/>

            <br/>
            <br/>
            <button onClick={submitButton}>Submit Now</button>
        </div>
    )
}

export default Submit