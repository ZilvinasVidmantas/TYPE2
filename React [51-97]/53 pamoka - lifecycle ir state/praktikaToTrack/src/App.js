import React from "react";
import Counter from "./Counter";

class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      downloadsNumber: 0,
      seed: 50
    }
  }

  mountCounter = () => this.setState({mount: true})
  unMountCounter = () => this.setState({mount: false})
  downloadsNumber = () => this.setState({downloadsNumber: this.state.downloadsNumber+1});
  seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unMountCounter} disabled={!this.state.mount}>UnMount Counter</button>
        <button onClick={this.downloadsNumber}>Download</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        {this.state.mount ? 
        <Counter 
          downloadsNumber={this.state.downloadsNumber}
          seed={this.state.seed}
        /> : null}
      </div>
    );
  }
}
 
export default APP;