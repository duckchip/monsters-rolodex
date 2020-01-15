import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters:  [],
      searchField: ''
    };

  }

  //this is a lifecycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse => reponse.json())
    .then(users => this.setState({monsters: users}))
  }

  //arrow functions automatically bind the context from where the function is called
  //equevalent of this.handleChange = this.handleChange.bind(this);
  //A good rule of thumb is this: Use arrow functions on any class methods 
  //you define and aren't part of React (i.e. render(), componentDidMount()). 
  handleChange = e => {
    this.setState({searchField: e.target.value});
  };

  render() {
    //this is the equevalent of:
    //const monsters = this.state.monsters AND
    //const searchField = this.state.searchField
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    //never call setState in a render function, since this will cause an infinite loop. Unless you define
    //it in an anonymous function. But better to seperate it
    return (
      <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={this.handleChange} /> 
      <CardList monsters={filteredMonsters}>
      </CardList>
      </div>
    )
  };
}

export default App;
