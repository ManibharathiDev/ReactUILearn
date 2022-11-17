import React, { isValidElement } from "react";
import ReactDOM from "react-dom/client"
class MyForms extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {myName:'Ranjith',myAge:''};
        console.log(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event)
    {

        //event.target.value
        const myEvent = event
        const myTarget = myEvent.target
        const myValue = myTarget.value
        const myNameInput = myTarget.name

        
        
        console.log(myNameInput);
        this.setState(
            {
                [myNameInput] : myValue
            }
        )
        //this.setState({myName:event.target.value});
    }

    handleSubmit(event){
            alert("Your Form "+this.state.myName+" &"+this.state.myAge+"  Submitted");
            event.preventDefault();
    }


    render()
    {
        return(
            <>
                {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Your User Name:
                        <input type="text" name="myName" value={this.state.myName} onChange={this.handleInputChange}/>
                        
                        {/* <input type="text" value={this.state.myName} onChange={this.handleInputChange.bind(this)}/> */}
                        
                    </label>
                    <label>
                        Enter your Age:
                        <input type="text" name="myAge" value={this.state.myAge} onChange={this.handleInputChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForms/>)