import React from "react";
import ReactDOM from "react-dom/client";

class MyComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        /*this.state = {
            employee:{
                firstname:"Kumaran",
                lastname:"Raja",
                age:25,
                dateofyear:1990
            }
        };*/

        this.state = {
            employee : [
                {
                    id:1,
                    firstname:"Jack",
                    lastname:"Sparrow"
                },
                {
                    id:2,
                    firstname:"Mark",
                    lastname:"Antony"
                }
            ]
        };
    }
    
    render(){
        const { employee } = this.state;
        return(
            <div>
                    {/* <table>
                        <tr><td>{employee.firstname}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.age}</td>
                        <td>{employee.dateofyear}</td>
                        </tr>
                    </table> */}

                    <table border="1" width="100%">
                        <thead>
                            <tr><th>First Name</th><th>Last Name</th></tr>
                            </thead>
                            <tbody>
                            {
                                employee.map(emp =>(
                                    <tr key={emp.id}><td>{emp.firstname}</td><td>{emp.lastname}</td></tr>
                                ))
                            }
                            </tbody>
                        
                    </table>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyComponent/>)