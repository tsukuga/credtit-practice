import React, { Component } from 'react';
import Jugementfunc from './jugment'

export default class Practice extends React.Component {

  constructor() {
    super();

    this.state = {
      data:{
        '単位数':{
          '科目番号': "number",
          '科目名': "name",
          '単位数': "credit",
          '成績': "grade"
        }},
      index: '単位数',
      value: '国際総合学類/国際開発学/2015'
    };
  }

  render() {

    let jugement = new Jugementfunc(this.state.data,this.state.value)
    
    let result = jugement.jugement();

    return (
      <div>
      <div onClick={()=>(console.table(result.Youken))}>{'マスターカテゴリー'}</div>
      <div onClick={()=>(console.table(result.category))}>{'ヘッダカテゴリー'}</div>
      </div>
    )
  }

}