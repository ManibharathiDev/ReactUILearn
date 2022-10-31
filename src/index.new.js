import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
let counts = 0;
function Welcome(props)
{

    const[count, setCount] = useState(0);
    
    const setValue = () => {
        counts++;
        setCount(counts);
    }

    function getMyProps()
    {
        alert(props.myBrand)
    }

    function getMyName(){
        alert("Manibharathi");
    }

    const getMyNames = () => {
        alert("Manibharathis");
    }

    const getPassName = (name) => {
        alert(name);
    }

    return(
        <>
            <div>
                Welcome Developers
                <button onClick={getMyName}>Get My Name</button>
                <button onClick={getMyNames}>Get My Names</button>
                <button onClick={()=>getPassName("Ranjith")}>Pass Parameter</button>
                <button onClick={getMyProps}>Get My Props</button>
                <div>{count}</div>
                <button onClick={setValue}>Increase Count</button>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome myBrand="Audi"/>);
