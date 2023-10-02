import {BiSolidBookmark} from "react-icons/bi";
import {BsFillPlusCircleFill} from "react-icons/bs";
import {RiHome2Fill} from "react-icons/ri";
import {FaListAlt, FaTimes} from "react-icons/fa";
import Button from "../Button";
import {useNavigate} from "react-router-dom";
import {IProject} from "../../api/interfaces/IProject";
import api from "../../api/mockApi";
import CreateProjectModal from "../Modal/CreateProjectModal";
import {useEffect, useRef, useState} from "react";
import DeleteModal from "../Modal/DeleteModal";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    (async () => {
      setProjects(await api.getAllProjects());
    })();
  }, []);

  const [projectModalIsVisible, setProjectModalIsVisible] = useState(false);

  const [dialog, setDialog] = useState({
    message: "Are you sure you want to delete this project?",
    isLoading: false,
  });

  const getIdProject = useRef<number | undefined>(undefined);

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };

  const handleDeleteProject = (id: number) => {
    handleDialog("Are you sure you want to delete this project?", true);
    getIdProject.current = id;
  };

  const confirmDelete = (choose) => {
    if (choose) {
      api.deleteProject(getIdProject.current);
      handleDialog("", false);
      navigate("/mytasks");
    }
    handleDialog("", false);
  };

  return (
    <aside className="min-h-screen w-1/5 bg-darkerBlue text-white0">
      <div className="flex my-6 justify-center items-center p-2 border mx-2 rounded-full font-bold font-sans text-lg">
        Team Task Management
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
              <div className="flex items-center rounded-full pr-2 hover:bg-darkBlueHover ease-in-out duration-200">
                <Button
                  className="w-full"
                  onClick={() => navigate("/project/" + project.id)}>
                  <li
                    key={project.id}
                    className="flex items-center rounded-full hover:bg-darkBlueHover cursor-pointer px-3 py-1 ease-in-out duration-500">
                    <BiSolidBookmark className="mx-1 text-blue-400" />
                    <span className="flex items-center justify-between w-full">
                      {project.name}
                    </span>
                  </li>
                </Button>
                <Button onClick={() => handleDeleteProject(project.id)}>
                  <FaTimes className="text-darkerBlue text-lg hover:text-red-400 ease-in-out duration-300" />
                </Button>
              </div>
            );
          })}

          <button
            onClick={() => setProjectModalIsVisible(true)}
            className=" flex items-center rounded-full outline-none border text-white px-3 py-2 brightness-50 hover:brightness-100 font-semibold ease-in-out duration-500">
            <BsFillPlusCircleFill className="mr-2 text-xl hover:bg-white rounded-full ease-in-out duration-500" />
            Create Project
          </button>
          <CreateProjectModal
            visible={projectModalIsVisible}
            onClose={() => setProjectModalIsVisible(false)}
            onCreate={() => setProjectModalIsVisible(false)}
          />
        </ul>
        {dialog.isLoading && (
          <DeleteModal onDialog={confirmDelete} message={dialog.message} />
        )}
      </div> 

      <Button
        className="flex items-center gap-4 bg-gray2 rounded-lg pl-2 pt-3 pb-3 w-[80%] ml-6 mt-[125%]"
        onClick={() => navigate("/profile")}>
        <div className="w-8 h-8 bg-blue0 rounded-full -mr-2 text-white text-sm">
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
