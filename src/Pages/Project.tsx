import Tasks from "../Components/TasksComps/Tasks";
import { useState, useEffect } from "react";
import AddTask from "../Components/TasksComps/AddTask";

interface ITask {
  id: number;
  taskName: string;
  dueDate: Date;
  priority: string;
}

const Project = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
// 
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }
// 
  const addTask = async (task: any) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  });

  const data = await res.json();

  setTasks([...tasks, data]);
  setShowForm(!showForm);
};


  const removeOnComplete = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="px-16 py-16 overflow-hidden">
      <button
        className={`rounded-full outline-none ${
          showForm
            ? "bg-red-700 hover:bg-red-800"
            : "bg-green-700 hover:bg-green-800"
        } px-5 py-3 mb-2 text-white font-semibold box-border ease-in-out duration-500`}
        onClick={() => setShowForm(!showForm)}
      >
        {!showForm ? "Add Task" : "Close"}
      </button>
      {showForm && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} removeOnComplete={removeOnComplete} />
      ) : (
        <h1 className="font-semibold mt-4">!No tasks to show!</h1>
      )}
    </div>
  );
};

export default Project;
