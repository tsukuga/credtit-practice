import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Child extends React.Component {
  // addValueChild() {
  //   this.props.add(10);
  // }

  render(){
    return(
      <React.Fragment>
      {this.props.value}
    <button type="buttun" onClick={this.props.add.bind(this,10)}>
    add
    </button>
      </React.Fragment>
    )
  }
}