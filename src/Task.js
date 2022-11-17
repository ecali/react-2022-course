export const Task = (props) => {
    return (
        <div className="task" >
              <h1 style={{color: props.task.complete ? 'green' : 'black' }} >{props.task.taskName}</h1>
              <button onClick={() => props.completeTask(props.task.id)}>COMPLETE</button>
              <button onClick={() => props.deleteTask(props.task.id)}>x</button>
            </div>
    );
}