import React from 'react';
import './App.css';
import { Album } from './components/Album';

class App extends React.Component {
  state = {
    list: [],
    isLoading: false
  };

  componentDidMount() {
    const url = 'http://localhost:3000/assets/json/cakesList.json';
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ isLoading: false, list: data });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isLoading: false, list: [] });
      });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <Album list={list} />
      </div>
    );
  }
}

export default App;
