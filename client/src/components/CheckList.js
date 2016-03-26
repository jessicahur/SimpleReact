import React, {Component} from 'react';

class CheckList extends Component {
  render() {
        console.log('At Checklist', this.props.tasks);
    let tasksM = this.props.tasks.map(task => { //Use "let" here so that we don't override the (var) tasks that got passed down from Card?
      <p className="checklist_task" >
        <input type='checkbox' defaultChecked={task.done} key={task.id}/>
        {task.name}
        <a href='#' className='checklist__task--remove' />
      </p>
    }); // after fat arrow used () ?
    return (
      <div className='checklist'>
        {tasksM}
      </div>
    )
  }
}
 export default CheckList;
