import { useState, useEffect } from "react";
import TableRow from "./TableRow"

interface ITable{
  id:number;
  taskName:string;
  dueDate:Date;
  priority:string;
}

const MyTasks = () => {
  const [tasks, setTasks] = useState<ITable[]>([]);

  //FechData
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

  const removeOnComplete = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="border rounded-lg w-56 h-9 flex items-center gap-2 ml-5 mt-5 opacity-50">
        <svg
          className="w-4 h-4 ml-2 text-gray-800 dark:text-white opacity-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <p>Search for tasks</p>
      </div>

      <div className="container mx-auto mt-5">
        <p className="font-medium text-2xl ml-5 mb-3">
          {tasks.length > 0 ? "Active Tasks" : "No Tasks"}
        </p>

        {tasks.length > 0 && (
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Mark as Complete
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Task Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <TableRow removeOnComplete={removeOnComplete} tasks={tasks} />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default MyTasks
