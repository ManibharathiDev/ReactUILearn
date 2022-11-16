import React from "react";
import ReactDOM from "react-dom/client";
import LoginComponent from "./component/pages/LoginComponent";
import LogoutComponent from "./component/pages/LogoutComponent";

const MyComponent = (props) =>{

        const isLogins = props.isLogin;
        const mySkills = props.skills

        /* Ternary Operator */
        return(
            <>
                {
                    (isLogins==="true")?<LoginComponent/>:<LogoutComponent/>
                }
            </>
        )

        /* Logical && Operator */
        /*return(
            <>
                {
                    mySkills.length > 0 &&
                    <h2>I have {mySkills.length} Skills in Information Technology</h2>
                }
                {
                    isLogins === "true" &&
                    <h2>Wow!, You are logged in</h2>
                }
                <div>
                    <h1>
                        Welcome Developers
                    </h1>
                </div>
            </>
        )*/
        

        /* If Conditional */
        /*if(isLogins === "true")
        {
            return(
                <LoginComponent/>
            )
        }
        else
        {
            return(
                <LogoutComponent/>
            )
        }*/

        /*const myNumber = props.number
        if(myNumber%2 === 0)
        {
            return(
                <div>
                    <h1>This is Even Number</h1>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <h1>This is Odd Number</h1>
                </div>
            )
        }*/


}

const root = ReactDOM.createRoot(document.getElementById('root'));
const mySkills = ['JS',"HTML","ReactJS"]
root.render(<MyComponent isLogin="false" skills={mySkills}/>)