import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

export class Stripes extends Component {

  showStripes = () => (
      <div>
        stripes

      </div>
      )

  render() {
    return (
      <div className="featured-stripes">
        {this.showStripes()}
      </div>
    );
  }
}

export default Stripes;
