import React from "react";
import ReactDOM from "react-dom/client"
import useRef  from "react";

class MainComponent extends React.Component{

    constructor(props)
    {
        super();
        console.log(props.carName);
        console.log(props.carMileage);
        this.name = props.carName;
        this.mileage = props.carMileage;
    }

    let getMyName = () => {
        alert("I am Mukesh");
        
    }

    getMyNameWithArg = (myName) => {
        let myNames = myName;
        alert(myNames);
    }

    // This refers to current object of the current class


    render()
    {
        return(
            <div>
                <h1>Welcome Class based Component - {this.name}</h1>
                <h1>My Mileage is - {this.mileage}</h1>
                <h1 onClick={this.getMyName}>Get My Name</h1>
                <h1 onClick={()=>this.getMyNameWithArg("Ranjith")}>Get My Value</h1>
            </div>
        );
    }
}

//If you use functional Component, you must return jsx in retrun statement;
// If you use class component, you must use render with return statement

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponent carName="Hyundai" carMileage="23phr"/>)