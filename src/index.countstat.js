import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComps from "./component/headercomp";


const myStyle = {
    margin:0
}

const HeaderComp = (props) => {
    console.log(props) 
    return(
        <div style={
            {
                backgroundColor:'#FF0000',
                color:'#FFFFFF',
                textAlign:'center',
            }
        }> 
            <h1 style={myStyle}>{props.compName}</h1>
        </div>
    )
}

const FooterComp = (props) => {
    console.log(props);
    return(
        <div  style={
            {
                backgroundColor:'#FF0000',
                color:'#FFFFFF',
                textAlign:'center',
            }
        }>
            
            <h1 style={myStyle}>Footer Component</h1>
        </div>
    )
}

const BodyComp = () => {
    return(
        <div  style={
            {
                backgroundColor:'#FF00FF',
                color:'#FFFFFF',
                textAlign:'center',
            }
        }>
            <h1 style={myStyle}>Body Component</h1>
        </div>
    )
}

const MainComp = () => {
    return(
        <div>
            <HeaderComps newName="Qtree Tech"/>
            <HeaderComps newName="Ranjith Tech"/>
            <HeaderComps newName="Nano Tech"/>
            <HeaderComp compName="Headers"/>
                <BodyComp/>
            <FooterComp/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComp/>)