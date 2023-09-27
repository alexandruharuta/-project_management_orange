import Navbar from "../Layout/Navbar";
import { Sidebar } from "../Layout/Sidebar";
import UserProfile from "./UserProfile";

const UserLayout = () => {
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Navbar></Navbar>
          <UserProfile></UserProfile>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
