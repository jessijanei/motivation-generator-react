import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = { motivation: '' };

  componentDidMount() {
    
  }

  fetchMotivation = () => {
    axios.get(	https://api.adviceslip.com/advice)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <h1>APP</h1>
    )
  }
}

export default App;
