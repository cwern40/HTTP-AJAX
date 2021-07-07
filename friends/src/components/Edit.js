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

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(`http://localhost:5000/friends/${id}`)
        axios.get(`http://localhost:5000/friends/${id}`)
          .then(response => {
            console.log("Edit", response)
            // this.setState({
            //   friends: response.data
            // })
          })
          .catch(err => {
            console.log("Error:", err);
          })
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
        console.log(`http://localhost:5000/friends/${id}`);

        axios.put(`http://localhost:5000/friends/${id}`, payload)
            .then((response) => {
                this.props.updateList(response.data);
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log("Error Message:", err)
            })      
    }

    render() {
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