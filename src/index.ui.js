import React from "react";
import ReactDOM  from "react-dom/client";

const myStyle = {
    margin:0
}

const HeaderComp = () =>
{
    return (
        <>
            <div style={{
                backgroundColor:'#FF0000',
                textAlign:'center'
            }}>
            <h1 style={myStyle}>Header</h1>
            </div>
        </>
    )
}

const FooterComp = () => 
{
    return(
        <>
            <div style={{
                backgroundColor:'#F09F09',
                textAlign:'center',
            }}>
            <h1 style={myStyle}>Footer</h1>
            </div>
        </>
    )
}

const BodyComp = () => {
    return(
        <>
            <div style={{
                backgroundColor:'#09FF09',
            }}>
            <h1 style={myStyle}>Main Content</h1>
            </div>
        </>
    )
}

const MainComp = () => {
    return(
        <>
            <HeaderComp/>
                <BodyComp/>
            <FooterComp/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComp/>)