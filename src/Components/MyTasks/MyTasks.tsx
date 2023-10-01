import {useEffect, useState} from "react";
import {IProject} from "../../api/interfaces/IProject";
import TableRow from "./TableRow";
import api from "../../api/mockApi";

const MyTasks = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    (async () => {
      setProjects(await api.getAllProjects());
    })();
  }, []);

  return (
    <>
      <p className="font-medium text-2xl ml-5 mt-3">Active Tasks</p>
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
              project.tasks.map((task) => (
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
