import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class FriendCard extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteItem = (event) => {
        event.preventDefault();
        const id = this.props.friend.id;
    
        axios.delete(`http://localhost:5000/friends/${id}`)
          .then((response) => {
            console.log(response);
            this.props.updateList(response.data)
            this.props.history.push('/')
          })
          .catch((err) => {
            console.log("Delete Error", err);
          })
      }
    
    render() {
        console.log("Card", this.props)
        return (
            <div className="friend-card">
                <div className="icons">
                <Link to={`/edit/${this.props.friend.id}`} ><i className="far fa-edit"></i></Link>
                <i className="far fa-trash-alt" onClick={this.deleteItem} ></i>
                </div>
                <h2 className="name">{this.props.friend.name}</h2>
                <p className="email">Email: {this.props.friend.email}</p>
                <p className="age">Age: {this.props.friend.age}</p>           
            </div>
        );
    }
};

export default FriendCard;