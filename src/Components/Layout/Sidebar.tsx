import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidBookmark } from "react-icons/bi";
import { RiHome2Fill } from "react-icons/ri";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="min-h-screen w-1/5 bg-darkerBlue text-white">
      <div className="mx-6 my-6">
        <AiOutlineMenu
          className="cursor-pointer hover:text-gray ease-in-out duration-500"
          style={{ fontSize: "25px" }}
        />
      </div>
      <div className="flex w-full my-4">
        <img
          src="src/assets/profile-user.png"
          alt="pfp"
          className="w-20 h-20 mx-auto"
        />
      </div>
      <div className="border-t border-gray mx-6 my-4 flex justify-start items-center grid">
        <Button
          className="flex items-center mt-4 rounded-full hover:bg-darkBlueHover cursor-pointer w-full py-2 px-3 ease-in-out duration-500"
          onClick={() => navigate("/home")}
        >
          <RiHome2Fill className="mr-2" />
          Home
        </Button>
        <Button
          className="flex items-center mt-4 rounded-full hover:bg-darkBlueHover cursor-pointer w-full py-2 px-3 ease-in-out duration-500"
          onClick={() => navigate("/mytasks")}
        >
          My Tasks
        </Button>
      </div>
      <div className="mx-6 border-t border-gray">
        <h1 className="flex items-center text-gray mt-5 mb-2">Projects</h1>
        <ul className="my-2 space-y-2">
          <Button
            className="flex items-center rounded-full hover:bg-darkBlueHover cursor-pointer px-3 py-1 ease-in-out duration-500"
            onClick={() => navigate("/project")}
          >
            <BiSolidBookmark style={{ color: "lightred" }} className="mr-1" />
            Project 1
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
