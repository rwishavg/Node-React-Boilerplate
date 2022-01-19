import React, { useState, useEffect } from 'react';
import Form from './Components/Form'
import './App.css';
// import Data from './Components/Data';
function App() {
    const [state, setState] = useState([{}])
    useEffect(() => {
        const url = "http://localhost:8000/api/data";

        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setState(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    })
    return (
        <>
            <div>
              {state.name}
              <br/>
              <Form />
            </div>        
        </>
    )

}

export default App;
