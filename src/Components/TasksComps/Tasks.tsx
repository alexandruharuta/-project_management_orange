import { ITask } from "../../api/interfaces/ITask";
import Task from "./Task"

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