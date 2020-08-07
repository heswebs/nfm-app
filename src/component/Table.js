import React, {Component} from 'react';
import data from './data/projects.json';

class Table extends Component{

  

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.name)
    }
   
    render(){
        const tableHead = Object.keys(data.projects[0]).map((item, i) => {
            return (
            <th key={item}>{item}</th>
            )
         }
        )
        const tableItem = data.projects.map(({name,type,castingDirector,postedDate}, i)=> {
            return (
            <>    
                <tr key={name}>
                <td className="projectName"><input name="items" value={name} type="checkbox"/>{name}</td>
                <td>{type}</td>
                <td>{castingDirector}</td>
                <td>{postedDate}</td>
                </tr>
            </>
            )
        })
    
        return (
            <>
            <form>
            <table>
                <caption><h2>Projects</h2></caption>
               <thead> 
                <tr>
                    {tableHead}
                </tr>
               </thead>
               <tbody> 
                    {tableItem} 
                </tbody>
            </table>
            <button type="button" onClick={this.handleSubmit}>submit</button>
            </form>
            </>   
        )
    }
    
}
export default Table