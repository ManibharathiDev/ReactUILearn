import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import HeaderClassComp from "./component/HeaderClassComp";

class MainComponentClass extends React.Component
{
    render(){
        return(
        <div>
            <HeaderClassComp/>
        </div>
        )
            
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponentClass/>);
