import React from "react";
import  ReactDOM  from "react-dom/client";
import { useState } from "react";

const RowComponent = () =>{

    const[rcount, setRowCount] = useState(0);
    
    const setNewRow = (e) => {

        if(e.target.value !== "")
        {
            setRowCount(parseInt(e.target.value))
        }
        else
        {
            setRowCount(0);
        }

        
    }
    

   const myDataList = Array.from(Array(rcount),(e,i) => {
        if(i !== "")
        {
            return(
                <li key={i}>{i}</li>
            )
        }
        else{
            return(<li>Empty</li>)
        }
        
   })

    return(
        <div>
            <input type="text" onChange={(e) =>setNewRow(e)}/>
            <ul>
                
                {
                myDataList
                }
            </ul>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RowComponent/>)