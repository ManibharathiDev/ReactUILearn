import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

let count = 0;
const FuncComp = () => {

    
    const[myName, setMyName] = useState("Saravanan")
    const[myCount,setMyCount] = useState(0);

    const changeMyCount = () => {
        count++;
        setMyCount(count)
    }
    

    const changeMyName = (e) => {
            console.log(e.target.value);
            setMyName(e.target.value);
    }

    return(
        
            <div>
                <h1>Enter your name</h1>
                {/* If you pass parameter, you can use below type */}
                <input type="text" onChange={(e) => changeMyName(e)}/>
                <br/>
                <h2>
                    {
                        myName
                    }
                </h2>
                <h1>{myCount}</h1>
                {/* without parameter, you can use below type */}
                <button onClick={changeMyCount}>Increment</button>
            </div>
    
    );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FuncComp/>)