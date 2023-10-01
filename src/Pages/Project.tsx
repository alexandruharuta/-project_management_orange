import Tasks from "../Components/TasksComps/Tasks";
import {useEffect, useState} from "react";
import AddTask from "../Components/TasksComps/AddTask";
import {IProject} from "../api/interfaces/IProject";
import api from "../api/mockApi";
import {ITask} from "../api/interfaces/ITask";
import Task from "../Components/TasksComps/Task";

type ProjectProps = {
  id: number;
};

const Project: React.FC<ProjectProps> = (props) => {
  const [projectData, setProjectData] = useState<IProject | undefined>();

  useEffect(() => {
    (async () => {
      setProjectData(await api.getProject(props.id));
    })();
  });

  const [showForm, setShowForm] = useState(false);

  const addTask = async (task: ITask) => {
    if (!projectData) return;

    task.id = findLargestTaskId(projectData.tasks) + 1;
    projectData.tasks.push(task);
    const udpatedProject = await api.updateProject(projectData);
    setProjectData(udpatedProject);
    setShowForm(!showForm);
  };

  const removeOnComplete = async (taskId: number) => {
    if (!projectData) return;
    projectData.tasks = projectData.tasks.filter((task) => task.id !== taskId);
    const udpatedProject = await api.updateProject(projectData);
    setProjectData(udpatedProject);

    setProjectData((e) => e && {...e});
  };

  return (
    <div className="px-16 py-16 overflow-hidden">
      <button
        className={`rounded-full outline-none ${
          showForm
            ? "bg-red-700 hover:bg-red-800"
            : "bg-green-700 hover:bg-green-800"
        } px-5 py-3 mb-2 text-white font-semibold box-border ease-in-out duration-500`}
        onClick={() => setShowForm(!showForm)}>
        {!showForm ? "Add Task" : "Close"}
      </button>
      {showForm && <AddTask addTask={addTask} />}

      {projectData && projectData.tasks?.length > 0 ? (
        <div className="border-b-2 border-gray">
          {projectData.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              removeOnComplete={removeOnComplete}
            />
          ))}
        </div>
      ) : (
        <h1 className="font-semibold mt-4">!No tasks to show!</h1>
      )}
    </div>
  );
};

export default Project;

function findLargestTaskId(projects: ITask[]): number {
  if (projects.length === 0) {
    return 0;
  }

  let largestIdProject = projects[0];

  for (const project of projects) {
    if (project.id > largestIdProject.id) {
      largestIdProject = project;
    }
  }

  return largestIdProject.id;
}
