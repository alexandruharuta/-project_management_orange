import {BiSolidBookmark} from "react-icons/bi";
import {RiHome2Fill} from "react-icons/ri";
import {FaListAlt} from "react-icons/fa";
import Button from "../Button";
import {useNavigate} from "react-router-dom";
import {IProject} from "../../api/interfaces/IProject";
import api from "../../api/mockApi";
import CreateProjectModal from "../Modal/CreateProjectModal";
import {useEffect, useState} from "react";

export const Sidebar = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    (async () => {
      setProjects(await api.getAllProjects());
    })();
  });

  const [projectModalIsVisible, setProjectModalIsVisible] = useState(false);

  return (
    <aside className="min-h-screen w-1/5 bg-darkerBlue text-white0">
      <div className="flex w-full my-6">
        {/* <img
          src="src/assets/profile-user.png"
          alt="pfp"
          className="w-20 h-20 mx-auto"
        /> */}
      </div>
      <div className="mx-6">
        <ul className="mb-4">
          <Button className="w-full" onClick={() => navigate("/home")}>
            <li className="flex items-center mt-4 rounded-full hover:bg-darkBlueHover cursor-pointer w-full py-2 px-3 ease-in-out duration-500">
              <RiHome2Fill className="mr-2" />
              Home
            </li>
          </Button>
          <Button className="w-full" onClick={() => navigate("/mytasks")}>
            <li className="flex items-center mt-4 rounded-full hover:bg-darkBlueHover cursor-pointer w-full py-2 px-3 ease-in-out duration-500">
              <FaListAlt className="mr-2" />
              My Tasks
            </li>
          </Button>
        </ul>
      </div>
      <div className="mx-6 border-t border-gray-400">
        <h1 className="flex items-center text-gray0 mt-5 mb-2">Projects</h1>
        <ul className="my-2 space-y-2">
          {projects.map((project) => {
            return (
              <Button
                className="w-full"
                onClick={() => navigate("/project/" + project.id)}>
                <li className="flex items-center rounded-full hover:bg-darkBlueHover cursor-pointer px-3 py-1 ease-in-out duration-500">
                  <BiSolidBookmark
                    style={{color: "lightred"}}
                    className="mr-1"
                  />
                  {project.name}
                </li>
              </Button>
            );
          })}

          <button
            onClick={() => setProjectModalIsVisible(true)}
            className=" rounded-lg  bg-white text-black px-2 py-1 hover:brightness-75">
            Create Project
          </button>
          <CreateProjectModal
            visible={projectModalIsVisible}
            onClose={() => setProjectModalIsVisible(false)}
            onCreate={() => setProjectModalIsVisible(false)}
          />
        </ul>
      </div>

      <Button
        className="flex items-center gap-4 bg-gray2 rounded-lg pl-2 pt-3 pb-3 w-[80%] ml-6 mt-[125%]"
        onClick={() => navigate("/profile")}>
        <div className="w-8 h-8 bg-blue0 rounded-full -mr-2 bg-gray0 text-white text-sm">
          JD
        </div>
        <div className="grid">
          <p className="text-[15px]">John Doe</p>
          <p className="text-[10px] -mt-1 font-light">Web Developer</p>
        </div>
      </Button>
    </aside>
  );
};
