import React, { Component } from 'react';
import Filefunc from './filefn';
import Conect from '../conect'

export default class FileForm extends React.Component {
  constructor() {
    super();
  }

  getChild(e) {

    let filefunction = new Filefunc();
    
    // 入力された成績ファイルを二次元配列にして親クラスのstateに格納
    filefunction.Getdata(e, (data) => {
      this.props.hoge(data);
    });

  }

  render() {
    return (
      <div>
        <input className="form-control form" type="file" id="file" size="30"
          onChange={this.getChild.bind(this)}
        />
      </div>
    )
  }

}





