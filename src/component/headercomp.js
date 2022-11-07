import React from "react";
import { useState } from "react";


const HeaderComps = (props) => {
    let myCount = 0;
    const[count,setCount] = useState(0);
    const changeCount = () =>{
        myCount = count;
        myCount++;
        setCount(myCount);
    }

    return(
        <div>
            New Header Component {props.newName}
            <h1>
                {count}
            </h1>
            <button onClick={changeCount}>Change Count</button>
        </div>
    )
}

export default HeaderComps;