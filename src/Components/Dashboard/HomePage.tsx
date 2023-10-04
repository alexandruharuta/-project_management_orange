import {useEffect, useState} from "react";
import api from "../../api/mockApi";
import {FaTimes} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {BiSolidBookmark} from "react-icons/bi";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      setProjects(await api.getAllProjects());
    })();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex justify-around items-center mt-32">
      <div className="flex space-y-3 flex-col text-2xl bg-slate-300 rounded-3xl px-20 py-14">
        <h1 className="font-bold">Active Projects:</h1>
        {projects.map((project) => (
          <div
            className="flex items-center rounded-full text-white pr-2 bg-darkBlueHover/50 hover:bg-darkBlueHover ease-in-out duration-300"
            key={project.id}>
            <button
              className="w-full"
              onClick={() => navigate("/project/" + project.id)}>
              <li className="flex items-center px-3 py-1 w-full">
                <BiSolidBookmark className="mx-1 text-blue-400" />
                <span className="flex items-center justify-between">
                  {project.name}
                </span>
              </li>
            </button>
          </div>
        ))}
      </div>
      <div className="flex space-y-3 flex-col text-2xl bg-slate-300 rounded-3xl px-20 py-14">
        <h1 className="font-bold">Active Tasks:</h1>
        {projects.map((project) => (
          <div className="space-y-1">
            {project.tasks.map((task: any) => (
              <div
                className="flex items-center rounded-full text-white pr-2 bg-darkBlueHover/50 hover:bg-darkBlueHover ease-in-out duration-300"
                key={task.id}>
                <button
                  className="w-full"
                  onClick={() => navigate("/project/" + project.id)}>
                  <li className="flex items-center px-3 py-1 w-full">
                    <BiSolidBookmark className="mx-1 text-red-400" />
                    <span className="flex items-center justify-between">
                      {task.taskName}
                    </span>
                  </li>
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
