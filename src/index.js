import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComps from "./component/headercomp";
//Default Export
//Named Export

const ListComponent = (props) => {

    //const myNumbers = [5,4,3,2,1];
    const myNumbers = props.myId
    const listItems = myNumbers.map((num) =>
       <tr key={num.toString()}><td>{num}</td><td>{num*2}</td><td>25</td></tr>
    );

    return(
        <div>
            Welcome Developers
            <table border="1">
                <tr><td>ID</td><td>Name</td><td>Age</td></tr>
                {listItems}
            </table>
        </div>
    );
}

const myNumbers = [5,4,3,2,1];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListComponent myId={myNumbers}/>);
//root.render(<HeaderComps newName="Ranjith" myId={myNumbers}/>)
