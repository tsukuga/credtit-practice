import React from 'react';

export default class CreateTd extends React.Component{
  constructor() {
    super();
    this.state = {
      data: [],
      index: '単位数'
    };
  }
     render(){
      return(
       <React.Fragment>
       {Object.keys(this.props.td).map((e)=>(
         <td>{this.props.td[e]}</td>))}
       </React.Fragment>
       )
      }
     }