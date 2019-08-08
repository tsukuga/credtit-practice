import React from 'react';
import CreateTd from './createtd';
export default class Createtable extends React.Component {
  
  render() {

     return (
            <React.Fragment>
            <table>
             <tbody>
              {this.props.score.map((e)=>(
              <tr>
               <CreateTd td = {e}/>
              </tr>))}
             </tbody>
            </table>
           </React.Fragment>
        )
  }
}