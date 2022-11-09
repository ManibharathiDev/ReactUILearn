import React from "react";
import ReactDOM from "react-dom/client"

class College extends React.Component{

        constructor(props){
            super(props);
            //const[myName,setMyName] = useState("Ran");

            this.state = {collegeName:"RVS College of Engineering",
                        department:"MCA",
                        affiliation:"Anna University",
        };

        }

        changeState = () => {
            this.setState(
                {department:"MBA",
                collegeName:"PSG Tech",
            }
            );
        }
        changeMyDepartment = (value) => {
                this.setState({
                    department:value
                });
        }

        render()
        {
            return(
                <div>
                    <h1>Welcome Developers</h1>
                    <h1>{this.state.collegeName}</h1>
                    <h1>{this.state.department}</h1>
                    <h1>{this.state.affiliation}</h1>
                    <button onClick={this.changeState}>Change My Department to MBA</button>
                    <br/>
                    <input type="text" onChange={(e)=>this.changeMyDepartment(e.target.value)}/>
                </div>
            )
        }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<College/>);