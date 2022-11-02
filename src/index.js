import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react"

const ShowList = () =>{

    const[rcount, setRowCount] = useState(0);
    const changeRowCount = (e) =>
    {
        console.log(typeof(e.target.value))
        
        if(e.target.value !== "")
            setRowCount(parseInt(e.target.value))
        else
            setRowCount(0)
        
    }

    //const myItem = <h1>Hi Ranjith</h1>

   

    const myListItem = Array.from(Array(rcount),(e,i)=>{
        // return(<li>{i}</li>)
        return(
            <tr><td>{i}</td><td>{5+5}</td></tr>
        )
    });



    return(
        <div>
            <input type="text" onChange={(e) => changeRowCount(e)}/>
           
            <br/>
            <h1>{rcount}</h1>
            <table border="1">
                {myListItem}
            </table>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ShowList/>)