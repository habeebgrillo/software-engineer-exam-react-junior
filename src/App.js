import React, { } from 'react';
import './App.css';
import New from './new';


const fields = [
    { name: "field_name", label: "Name", type: "text" },
    { name: "field_username", label: "User", type: "text" },
    { name: "field_date", label: "Date", type: "date" }
];

class App extends React.Component {

    formRef = React.createRef();

    componentDidMount() {
        this.createFormElements();
    }

    // Function to create form elements dynamically
    createFormElements = () => {
        fields.forEach((field) => {


            const label = document.createElement("label");
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type;

            this.formRef.current.appendChild(label);
            this.formRef.current.appendChild(input);

            // Add click event listener to label to focus on input
            label.addEventListener("click", () => {
                input.focus();
            });
        });
    };


    render() {
        return (
            <div className="container">
                <h1>Webtrends Optimize Software Engineer exam</h1>
                <form ref={this.formRef}></form>
                <New text="hello" />
            </div>

        );

    }

}

export default App;