import React, { Component } from 'react';
import { render } from 'react-dom';
import Child from './Child'
import FileForm from '../CreateForm/createFile'
import MakeList from '../CreateList/makeLists'
import Createtable from '../Createtable/createtable'


export default class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Prescore: 100,
      score: [
        {
          '科目番号': "",
          '科目名': "",
          '単位数': "",
          '成績': ""
        },

      ],
      Syozoku: '',
    }
  }

  Getchild(e) {
    this.setState({ Prescore: this.state.Prescore + e })
  }

  Getchildscore(e) {
    this.setState({ score: e })
  }

  GetselectedList(e) {
    this.setState({ Syozoku: e })
  }

  Jugement() {

  }

  render() {
    return (
      <React.Fragment>

        <Child add={this.Getchild.bind(this)} value={this.state.Prescore} />

        <FileForm hoge={this.Getchildscore.bind(this)} />

        <MakeList getselected={this.GetselectedList.bind(this)} />


        <button className="show" type="buttun"
          onClick={() => (console.log(this.state.score))}>show</button>

        <button className="show" type="buttun"
          onClick={() => (console.table(this.state.score))}>get</button>
      </React.Fragment>
    )
  }
}