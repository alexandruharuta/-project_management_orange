import Task from "./Task"

interface ITask {
  id: number;
  taskName: string;
  dueDate: string;
  priority: string;
}

interface ITaskList {
  tasks: ITask[];
}

const Tasks: React.FC<ITaskList> = ({tasks}) => {
  return (
    <div className="border-b-2 border-gray">
      {tasks.map((task)=>(
        <Task key={task.id} task={task}/>
      ))}
      
    </div>
  )
}

export default Tasks