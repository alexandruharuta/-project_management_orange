import Tasks from "../Components/TasksComps/Tasks"
import { useState } from 'react';
import AddTask from "../Components/TasksComps/AddTask";

interface ITask {
  id: number;
  taskName: string;
  dueDate: string;
  priority: string;
}

const Project = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "Create login form",
      dueDate: "1 oct",
      priority: "Medium",
    },
    {
      id: 2,
      taskName: "Make db of task lists",
      dueDate: "5 oct",
      priority: "High",
    },
    {
      id: 3,
      taskName: "Create toggle button",
      dueDate: "6 oct",
      priority: "Low",
    },
  ])

  const [showForm, setShowForm] = useState(false)
  return (
    <div className="px-16 py-16 overflow-hidden">
      <button className={`rounded-full outline-none ${showForm ? 'bg-red-700 hover:bg-red-800' : 'bg-green-700 hover:bg-green-800'} px-5 py-3 mb-2 text-white font-semibold box-border ease-in-out duration-500`} onClick={() => setShowForm(!showForm)}>{!showForm ? 'Add Task':'Close'}</button>
      {showForm && <AddTask />}
      <Tasks tasks={tasks} />
    </div>
  )
}

export default Project