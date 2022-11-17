import React from "react";
import ReactDOM from "react-dom/client";
import logo from './google.png';


class UnControlledComp extends React.Component{
    constructor(props)
    {
        super(props);
        this.defaultMyName = "Ram";
        this.inputName = React.createRef();
        this.inputAge = React.createRef();
    }

    handleSubmit(event){
            alert("You have submitted "+this.inputName.current.value+" & "+this.inputAge.current.value)
            event.preventDefault();
    }


    render()
    {
        return(
            <div>
                <img src={logo} alt="test"/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Enter the your name:
                        <input type="text" defaultValue={this.defaultMyName} ref={this.inputName}/>
                    </label>
                    <label>
                        Enter the your age:
                        <input type="text" ref={this.inputAge}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UnControlledComp/>)