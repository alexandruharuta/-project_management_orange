import Tasks from "../Components/TasksComps/Tasks"
import { useState } from 'react';
import AddTask from "../Components/TasksComps/AddTask";

const Project = () => {
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="px-16 py-16 overflow-hidden">
      <button className={`rounded-full outline-none ${showForm ? 'bg-red-700' : 'bg-green-700'} px-5 py-3 mb-2 text-white font-semibold box-border`} onClick={() => setShowForm(!showForm)}>{!showForm ? 'Add Task':'Close'}</button>
      {showForm && <AddTask/>}
      <Tasks/>
    </div>
  )
}

export default Project