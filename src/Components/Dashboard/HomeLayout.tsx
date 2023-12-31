import Navbar from "../Layout/Navbar";
import {Sidebar} from "../Layout/Sidebar";
import HomePage from "./HomePage";

const HomeLayout = () => {
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Navbar></Navbar>
          <HomePage></HomePage>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
