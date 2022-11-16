import React, { isValidElement } from "react";
import ReactDOM from "react-dom/client"
class MyForms extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {myName:''};
        console.log(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event)
    {
        this.setState({myName:event.target.value});
    }

    handleSubmit(event){
            alert("Your Form "+this.state.myName+" Submitted");
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
                        <input type="text" value={this.state.myName} onChange={this.handleInputChange}/>
                        
                        {/* <input type="text" value={this.state.myName} onChange={this.handleInputChange.bind(this)}/> */}
                        
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForms/>)