import React, { Component } from 'react';
import { render } from 'react-dom';
import FileForm from './CreateForm/createFile'
import Createtable from './Createtable/createtable';
import Conect from '../conect';

export default class Gattynnko extends React.Component{
  
  constructor() {
    super();
    this.state = {
      score: [
        {
          '単位数': "number",
          '成績': "name",
          '科目名': "credit",
          '科目番号': "grade"
        },{
          '単位数': "2.0",
          '成績': "name",
          '科目名': "credit",
          '科目番号': "grade"
        },
        ],
      index: '単位数'
    };
  }

  render(){
    return(
      <React.Fragment>
      <Createtable score ={this.state.score}/>
      </React.Fragment>
    )
  }

}