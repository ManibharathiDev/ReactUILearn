import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

let initialValue = 0;
function Developers(props)
{

    const[count, setCount] = useState(0)


    const changeValue = () => {
        setCount(initialValue++)
    }

    function Welcome()
    {
        alert("Hi All");
    }
//ES6 Arrow function
    const welcome = () => {
        alert("Hi All-Arrow");
    }

    const getMyName = (myName) => {
        alert(myName);
    }

    const getMyProp = () =>{
        alert(props.mySkill)
    }

    const getMyQualification = () => {
        alert(props.myQualification)
    }

    return(
        <>
            <div>
                <h1>Welcome Developers</h1>
                <h2>Qtree Technologies</h2>
                <button onClick={Welcome}>Click Me</button>
                <button onClick={welcome}>Click Arrow</button>
                <button onClick={()=>getMyName("Mukesh")}>Get My Name</button>
                <button onClick={getMyProp}>Get My Props</button>
                <button onClick={getMyQualification}>Get My Qualification</button>
                <h1>{count}</h1>
                <button onClick={changeValue}>Increment</button>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Developers mySkill="React JS" myQualification="MCA"/>);

