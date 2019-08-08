import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


export default class Conect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          '科目番号': "number",
          '科目名': "name",
          '単位数': "credit",
          '成績': "grade"
        }],
      index: '単位数',
      value: '国際総合学類/国際開発学/2015'
    };


  }

  reset() {
    this.setState({ data: this.props.aaaa })
  }

  render() {


    return (
      <React.Fragment>
        <button type="button" onClick={this.reset.bind(this)}>set反映</button>
      </React.Fragment>
    )

  }


}
