import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {  
      counter: 0,
      seed: 0
    }
  }

  decrement = () => this.setState({counter: this.state.counter-1})
  increment = () => this.setState({counter: this.state.counter+1})

  componentDidMount(){
    console.log("Component Did Mount");
    console.log("-------------------");
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");
    console.log("----------------------");
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.downloadsNumber && this.props.downloadsNumber !== nextProps.downloadsNumber){
      console.log("Should Component Update - DO NOT RENDER");
      //console.log(nextProps.downloadsNumber);
      console.log("---------------------------------------");
      return false;
    }
    console.log("Should Component Update - RENDER");
    return true;
  }

  static getDerivedStateFromProps(props, state){
    if(props.seed && state.seed !== props.seed){
      console.log("We DO get state from Props");
      return{
        seed: props.seed,
        counter: props.seed
      }
    }
    console.log("We DO NOT get state from Props");
    return null
  }

  render() { 
    console.log("Render");

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
      </div>
    );
  }
}

export default Counter;