import React, { Component } from 'react'
import DemoChild from './DemoChild';

export default class DemoParent extends Component {
    constructor(){
        super();
        this.state={
            message:"this is dummy message",
        }
    }
  render() {

    const {message} = this.state;

    return (
      <div>
          <div>Pass data from parent to child component</div>
          <hr/>
          <DemoChild message={this.state.message}
          />
      </div>
    )
  }
}
