/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-useless-constructor */
import "./App.css";
import { Component } from "react";

class App extends Component {

  timeoutUpdate = null

  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Título 1",
        body: "Corpo 1",
      },
      {
        id: 2,
        title: "Título 2",
        body: "Corpo 2",
      },
      {
        id: 3,
        title: "Título 3",
        body: "Corpo 3",
      },
    ],
  };

  // fetch aqui
  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }


  handleTimeOut = () => {
    const { posts, counter } = this.state;
    this.timeoutUpdate = setTimeout(() => {
      posts[0].title = "O título mudou...";
      this.setState({
        posts,
        counter: counter + 1,
      });
    }, 2000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
