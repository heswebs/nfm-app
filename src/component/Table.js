import React, {Component} from 'react';
import data from './data/projects.json';

class Table extends Component {

    state = {
        projects : []
    };


    componentDidMount(){
        let projects = data.projects.map((project) => {
            project.checked = false;
            return project
        });
        this.setState({
            projects
        })
    }
    handleChecked = (e) => {
       let data = this.state.projects.map((project) => {
        if(e.target.checked && e.target.value === project.name){
               project.checked = true
               
           }
           if(!e.target.checked && e.target.value === project.name){
               project.checked = false
           }
           return project
       })
       this.setState({
        projects: data
    })
    }

    handleSubmit = () => {
        this.state.projects.map((project) => {
           return project.checked?console.log(project):null;
        })
    }

    handleSort = () => {
        let sortedProjects = Array.from(this.state.projects);
        sortedProjects.sort((a,b) => {
            a = new Date(a.postedDate)
            b = new Date(b.postedDate)
           return a-b
        })
        this.setState({
                projects:sortedProjects
            })
    }
   
    render(){
        const tableItem = this.state.projects.map(({name,type,castingDirector,postedDate}, i)=> {
            return (
                <tr key={name}>
                <td className="projectName"><input onChange={this.handleChecked} name="items" value={name} type="checkbox"/>{name}</td>
                <td>{type}</td>
                <td>{castingDirector}</td>
                <td>{postedDate}</td>
                </tr>
            )
        })
    
        return (
            <>
            <table>
                <caption><h2>Projects</h2></caption>
               <thead> 
                <tr>
                    <th>name</th>
                    <th>type</th>
                    <th>casting Director</th>
                    <th onClick={this.handleSort}>posted date</th>
                </tr>
               </thead>
               <tbody> 
                    {tableItem} 
                </tbody>
            </table>
            <button type="button" onClick={this.handleSubmit}>submit</button>
            </>
        )
    }
    
}
export default Table