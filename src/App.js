import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters: [
        // initializing an empty an array which we will update later
      ],
      searchField: ""
    }
  }

  async componentDidMount(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();
    this.setState({monsters: json}) //set the state to the json response => monsters
    console.log(this.state.monsters)
  }
  
  handleChange = (e) => { 
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder= 'search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
