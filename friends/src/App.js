import React from 'react';
import './App.css';
import axios from 'axios';
import FriendContainer from './components/FriendsContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  render() {
    return (
      <div className="App">
        <FriendContainer friends={this.state.friends} />
      </div>
    );
  }
}
export default App;
