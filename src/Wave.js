import React, { Component } from 'react';

class Wave extends Component {

  render() {
    return (
      <div>
        {this.props.values.slice().reverse().map(value => this.renderValue(value))}
      </div>
    );
  }

  renderValue(value) {
    return (
      <div class="item">
        <input
          style={{width: "300px"}}
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={value}
        />
      </div>
    )
  }
}

Wave.defaultProps = {values: []};

export default Wave;
