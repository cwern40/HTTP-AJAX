import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            email: '',
            age: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateFriend = (event) => {
        event.preventDefault();

        const { name, email } = this.state;
        const age = parseInt(this.state.age);
        const payload = { name, email, age };
        const id = this.props.match.params.id;

        axios.put(`http://localhost:5000/friends/${id}`, payload)
            .then((response) => {
                console.log("Put Response:", response);
                this.props.updateList(response.data);
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log("Payload", payload);
                console.log("Error Message:", err)
            })      
    }

    render() {
        console.log("Edit:", this.props);
        const { name, email, age } = this.state;
        return (
            <div className="edit-form">
                <h3>Edit your friend</h3>
                <form onSubmit={this.updateFriend}>
                    <input type="text" name="name" value={name} placeholder="Enter friend's name..." onChange={this.handleChange} />
                    <input type="text" name="email" value={email} placeholder="Enter friend's email..." onChange={this.handleChange} />
                    <input type ="number" name="age" value={age} placeholder="Enter friend's age..." onChange={this.handleChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default Edit;