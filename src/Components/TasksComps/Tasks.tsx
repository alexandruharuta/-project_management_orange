import Task from "./Task"

interface ITask {
  id: number;
  taskName: string;
  dueDate: Date;
  priority: string;
}

interface ITaskList {
  tasks: ITask[];
  removeOnComplete:Function;
}

const Tasks: React.FC<ITaskList> = ({tasks, removeOnComplete}) => {
  return (
    <div className="border-b-2 border-gray">
      {tasks.map((task)=>(
        <Task key={task.id} task={task} removeOnComplete={removeOnComplete}/>
      ))}
      
    </div>
  )
}

export default Tasks