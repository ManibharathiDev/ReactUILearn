import React from "react";
import  ReactDOM  from "react-dom/client";
import { useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";

const FuncComp = () => {


    const[tableCount,setRowCount] = useState(0)
    const[countValue,getCountValue] = useState("");
    const[inputText,setInputText] = useState("")

    const changeTextValue = (e) => {
        setInputText(e.target.value)
    }

   const changeRowCount = () => {
        
        setRowCount(parseInt(countValue))
        
        console.log(tableCount)
   }

   const getInputValues = (e) => 
   {
        setRowCount(parseInt(e.target.value))
        //setInputText(e.target.value)
        //console.log(e.target.value)
        //getCountValue(e.target.value)
        //setRowCount(parseInt(tableCount))
   }


   const myTables = Array.from(Array(tableCount),(e,i) => {
        console.log("State Changed");
        return(<li>{i}</li>)
   })

    


    return(
        <>
            <div>
                Welcome Developers
                <ul>
                    {myTables}
                </ul>
            </div>
            <input type="text" onChange={(e)=>getInputValues(e)} value={tableCount}/>
            <button onClick={() => changeRowCount()}>Change Count</button>
            <input type="text" onChange={changeTextValue} value={inputText}/>
            <div>
                {inputText}
            </div>
            {/* <button onClick={() => changeRowCount()}>Change Count</button> */}
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FuncComp/>)