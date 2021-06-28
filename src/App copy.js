import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  state = {
    count: 0
  }

  add = () => {
    // this.setState({count : this.state.count + 1});)
    this.setState(current => ({count : current.count + 1})); // count에 의존하지 않는 좀더 세련된 방법
  };
  minus = () => {
    this.setState({count : this.state.count -1});
  };
  render (){
    return (
    <div>
      The number is {this.state.count}<br></br>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    );
  }

}

export default App;
