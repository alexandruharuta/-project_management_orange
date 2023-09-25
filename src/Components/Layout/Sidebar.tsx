import { BiSolidBookmark } from "react-icons/bi";
import { RiHome2Fill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="min-h-screen w-1/5 bg-darkerBlue text-white0">
      <div className="flex w-full my-6">
        <img
          src="src/assets/profile-user.png"
          alt="pfp"
          className="w-20 h-20 mx-auto"
        />
      </div>
      <div className="border-t border-gray0 mx-6">
        <ul className="mb-4">
          <Button
            className="w-full"
            onClick={() => navigate("/home")}
          >
            <li className="flex items-center mt-4 rounded-full hover:bg-darkBlueHover cursor-pointer w-full py-2 px-3 ease-in-out duration-500">
              <RiHome2Fill className="mr-2" />
              Home
            </li>
          </Button>
          <Button
            className="w-full"
            onClick={() => navigate("/mytasks")}
          >
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
          <Button
            className="w-full"
            onClick={() => navigate("/project")}
          >
            <li className="flex items-center rounded-full hover:bg-darkBlueHover cursor-pointer px-3 py-1 ease-in-out duration-500">
              <BiSolidBookmark style={{ color: "lightred" }} className="mr-1" />
              Project 1
            </li>
          </Button>
          <li className="flex items-center rounded-full hover:bg-darkBlueHover cursor-pointer px-3 py-1 ease-in-out duration-500">
            <BiSolidBookmark style={{ color: "lightblue" }} className="mr-1" />
            Project 2
          </li>
          <li className="flex items-center rounded-full hover:bg-darkBlueHover cursor-pointer px-3 py-1 ease-in-out duration-500">
            <BiSolidBookmark style={{ color: "lightgreen" }} className="mr-1" />
            Project 3
          </li>
        </ul>
      </div>
    </aside>
  );
};
