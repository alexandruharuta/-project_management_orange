import Navbar from "./Navbar";
import Project from "../../Pages/Project";
import {Sidebar} from "./Sidebar";
import {useParams} from "react-router-dom";

export default function Layout() {
  const projectId = +(useParams().id || "0");
  
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Navbar></Navbar>
          <Project key={projectId} id={projectId} />
        </div>
      </div>
    </>
  );
}
