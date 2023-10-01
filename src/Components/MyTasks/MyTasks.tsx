import {useEffect, useState} from "react";
import {IProject} from "../../api/interfaces/IProject";
import TableRow from "./TableRow";
import api from "../../api/mockApi";
import {FaSearch} from "react-icons/fa";

const MyTasks = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    (async () => {
      setProjects(await api.getAllProjects());
    })();
  }, []);

  return (
    <>
      <p className="font-medium text-2xl ml-5 mt-3">Active Tasks</p>
      <div className="flex items- mx-4 my-2 justify-center items-center">
        <div className="relative w-1/3">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring focus:border-blue-300 w-full border"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Task Name
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) =>
              project.tasks
                .filter((task) =>
                  task.taskName.toLowerCase().includes(input.toLowerCase())
                )
                .map((task) => (
                  <TableRow
                    key={task.id}
                    taskName={task.taskName}
                    dueDate={task.dueDate}
                    priority={task.priority}
                    projectName={project.name}
                  />
                ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyTasks;
