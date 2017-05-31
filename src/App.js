import React, { Component } from 'react';
import Animator from './Animator';

var defaultCode = `function (step) {
  return Math.sin(step / 10) / 2.0 + 0.5;
}`;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      code: defaultCode,
      size: 16,
      tickFunction: eval(`(${defaultCode})`),
      error: false,
    };
  }

  codeChanged (event) {
    const code = event.target.value;
    let tickFunction = this.state.tickFunction;
    let error = false;
    try {
      let f = eval(`(${code})`);
      tickFunction = f;
    } catch (_) {
      error = true;
    }
    this.setState({
      code: code,
      tickFunction: tickFunction,
      error: error,
    });
  }
  render() {
    return (
      <div>
        <Animator size={this.state.size} tick={this.state.tickFunction} />
        <textarea style={{position: "absolute", top: 0, right: 0, height: "100%", width: "50%", background: this.state.error ? '#ffeeee' : '#eeeeff'}} value={this.state.code} onChange={this.codeChanged.bind(this)}/>
      </div>
    );
  }
}

export default App;
