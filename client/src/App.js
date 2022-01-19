import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
// import Data from './Components/Data';
function App() {
    const [state, setState] = useState({})
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
            {state.age}        
        </>
    )

}

export default App;
