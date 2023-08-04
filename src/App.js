/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-useless-constructor */
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this)

    this.state = {
      name: "Beto",
      counter: 0,
    };
  }

  handleClick = () => {
    const { name } = this.state;
    console.log(`cliquei ${name}`);
    this.setState({ name: "Nome mudou para Ryan" });
  };

  handleClickC = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <span onClick={this.handleClick}>
              {name} - {counter}
            </span>
            <br></br>
            <button onClick={this.handleClickC}>+</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </header>
      </div>
    );
  }
}

export default App;
