// import React from "react";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>React</h1>
//     </div>
//   );
// }

// export default App;

// ---------------------------------- //

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Rudy', age: 27 },
      { name: 'Brianna', age: 24 },
      { name: 'Tuna', age: 1 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was Clicked!')
    // this.state.persons[1].name = 'rg';
    this.setState({
      persons: [
      { name: 'rg', age: 27 },
      { name: 'bt', age: 24 },
      { name: 'Tuna', age: 2 }
    ] });
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p>I'm a working react paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> I'm actually a Cat!</Person>
      </div>
    );
  }
}

export default App;
