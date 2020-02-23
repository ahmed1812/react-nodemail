import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import API from "../../utils/Api";

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleFormSubmit = e => {
        e.preventDefault();

        const newGmail = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        console.log(newGmail);
        // axios

        API.gmail(newGmail);

        this.setState(
            {
                name: "",  email: "", message: ""
            }
        )
    }
    // async  handleSubmit(e) {
    //     e.preventDefault()
    //     const { name, email, message } = this.state
    //    // console.log(this.state)
    //    const form = await axios.post('/api/form', {
    //         name,
    //         email,
    //         message
    //     })

    // }
    render() {
        return (
            <Form >
                <FormGroup>
                    <Label for="name"> Name: </Label>
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email"> Email: </Label>
                    <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="message"> Message: </Label>
                    <Input
                        type="textarea"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange} />
                </FormGroup>
                <Button onClick={this.handleFormSubmit}> Submit</Button>
            </Form>
        )
    };
}

export default Contact;
