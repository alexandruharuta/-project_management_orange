import Tasks from "../Components/TasksComps/Tasks";
import { useState } from "react";
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

  const addTask = (task: any) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setShowForm(!showForm);
  };

  const removeOnComplete = (id: number) => {
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
