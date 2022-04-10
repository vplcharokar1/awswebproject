import React, { Component } from 'react'

export default class DemoChild extends Component {

    constructor(){
        super();
        this.state ={
            name:"React"
        }
    }

  render() {
      const {message}=this.props;
    return (
      <div>Data coming from parent component
          <hr/>
          <table>
              <tr>
                  <td>
                      Message is :{message}
                  </td>
              </tr>
          </table>
      </div>
        
    )
  }
}
