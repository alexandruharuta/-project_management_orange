import Navbar from "./Navbar";
import Project from "../../pages/project/Project.tsx";
import { Sidebar } from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Navbar></Navbar>
          <Project></Project>
        </div>
      </div>
    </>
  );
}
