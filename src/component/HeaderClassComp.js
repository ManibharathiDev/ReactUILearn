import React from "react";

class HeaderClassComp extends React.Component
{
    constructor()
    {
        super();
        this.name = "Ranjith";
    }

    getMyName = () => {
        alert("Welcome Developer");
    }

    render(){
        return(
            <div onClick={this.getMyName}>
                Welcome Class Based Component
            </div>
        )
    }
}

export default HeaderClassComp;