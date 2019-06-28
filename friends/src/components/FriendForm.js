import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
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

        axios.post('http://localhost:5000/friends', payload)
            .then((response) => {
                console.log("Put Response:", response);
                this.props.updateList(response.data);
            })
            .catch((err) => {
                console.log("Payload", payload);
                console.log("Error Message:", err)
            })      
    }

    render() {
        console.log("Friend Form:", this.state);
        const { name, email, age } = this.state;
        return (
            <div className="friend-form">
                <h3>Add a new friend</h3>
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

export default FriendForm;