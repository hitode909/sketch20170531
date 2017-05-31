import React, { Component } from 'react';
import Wave from './Wave.js';

class Animator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      step: 0,
      values: [],
    };
  }

  componentDidMount () {
    this.tick();
    this.timer = setInterval(() => { this.tick()}, 100);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  tick () {
    this.setState((state, props) => {
      const size = props.size;
      const step = ++state.step;
      const values = this.state.values;
      values.push(props.tick(step));
      if (this.state.values.length > size) {
        values.shift();
      }
      return {
        values: values,
        step: step,
      };
    });
  }

  render() {
    return (
      <div>
        <div>step {this.state.step}</div>
        <Wave values={this.state.values} />
      </div>
    );
  }
}

Animator.defaultProps = {
  size: 1,
  tick: () => [],
};

export default Animator;
