import React from "react";
import ReactDOM from "react-dom/client";

class ArrayObjComponent extends React.Component
{
        constructor(props)
        {
            super(props);
            this.state = {
                employee: {
                    firstName:"Jack",
                    lastName:"Antony",
                    age:25
                }
            }
        }
        render()
        {
            const {employee} = this.state
            return(
                    <div>
                        <table border="1" width="100%">
                            <tr><td>{employee.firstName}</td><td>{employee.lastName}</td><td>{employee.age}</td></tr>
                        </table>
                    </div>
            )
        }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ArrayObjComponent/>)