import React from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsContainer'

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

  updateList = (friends) => {
    this.setState({ friends });
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} updateList={this.updateList}/>
      </div>
    );
  }
}
export default App;
