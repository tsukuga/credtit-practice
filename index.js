import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './CreateList/makeLists';
import './style.css';
import FileForm from './CreateForm/createFile'
import Gattynnko from './gattyannko'
import Conect from './conect'
import Parent from './Practice/Parent'
import Practice from './Jugement/practice'
import One from './Jugement/one'



render(<Parent />, document.getElementById('result'));
// render(<Practice />,document.getElementById('re'));
render(<One/>,document.getElementById('re'));