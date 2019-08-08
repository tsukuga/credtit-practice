import React, { Component } from 'react';
import { render } from 'react-dom';
import Lists from './List';
import Conect from '../conect';


export default class MakeList extends React.Component {

  constructor(props) {
    super(props);
  }

  // 選択された所属情報を親コンポーネントに渡す
  getSelectedList(e) {
    this.props.getselected(e.target.value);
  }

  render() {
    
    
    let list = new Lists();

    return (
      <React.Fragment>
        <select onChange={this.getSelectedList.bind(this)}>
          {Object.keys(list.GetList()).map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </React.Fragment>
    )
  }



}
