import Tasks from "../Components/TasksComps/Tasks"
import { useState } from 'react';
import AddTask from "../Components/TasksComps/AddTask";

const Project = () => {
  const [tasks, setTasks] = useState([])
  return (
    <div className="px-16 py-16">
      <AddTask/>
      <Tasks/>
    </div>
  )
}

export default Project