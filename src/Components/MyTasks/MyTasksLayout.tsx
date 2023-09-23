import Navbar from "../Layout/Navbar";
import { Sidebar } from "../Layout/Sidebar";
import MyTasks from "./MyTasks";

export default function Layout() {
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Navbar></Navbar>
          <MyTasks></MyTasks>
        </div>
      </div>
    </>
  );
}
