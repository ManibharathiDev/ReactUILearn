const LoginComponent = (props)=> {


    return(
        <div>
            <form>
                <label>
                    Enter Your User name
                    <br/>
                    <input type="text" onChange={(event) => props.myChageCallback(event)}/>
                </label>
                <br/>
                <label>
                    Enter Your password
                    <br/>
                    <input type="password"/>
                </label>
            </form>
        </div>
    )
}

export default LoginComponent;