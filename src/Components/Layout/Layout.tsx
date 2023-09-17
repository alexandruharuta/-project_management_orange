import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Project from "../../Pages/Project";

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
