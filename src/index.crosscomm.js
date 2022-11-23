import React from 'react';
import ReactDOM from 'react-dom/client'
import LoginComponent from './component/LoginComponent';
import ValidateComponent from './component/ValidateComponent';

class MainComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {myUserName:''}
    }

    onChangeCallback = (event) => {
        this.setState({
            myUserName:event.target.value
        })
            console.log(event.target.value);
    }


    render()
    {
        return(
            <>
                <LoginComponent myChageCallback = {this.onChangeCallback}/>
                <ValidateComponent myName={this.state.myUserName}/>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponent/>)