import React, { Component } from 'react';
import evaluate from './evaluate';

class Default extends Component {
  render() {
    const Content = evaluate(this.props.contents).default;

    return (
      <div>
        <Content />
      </div>
    );
  }
}

export default Default;
