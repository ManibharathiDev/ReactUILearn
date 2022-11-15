import React from "react";
import ReactDOM from "react-dom/client";
class ArrayObjComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            employee:[
                {
                    id:1,
                    firstName:"Ranjith",
                    lastName:"Mohan",
                    age:25,
                },
                {
                    id:2,
                    firstName:"Sanjeev",
                    lastName:"Rajan",
                    age:26,
                },
                {
                    id:3,
                    firstName:"Saravanan",
                    lastName:"Kumar",
                    age:28,
                }

            ]
        };
    }

    render()
    {
        const {employee} = this.state;
        return(
                <div>
                    <table border="1" width="100%">
                        <thead>
                            <tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>
                            {
                                employee.map(emp =>(
                                    <tr key={emp.id}>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.age}</td>
                                    </tr>
                                ))
                            }
                        </thead>
                    </table>
                </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ArrayObjComponent/>)