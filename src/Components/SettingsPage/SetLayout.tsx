import Navbar from "../Layout/Navbar";
import { Sidebar } from "../Layout/Sidebar";
import SettingsPage from "./SettingsPage";

const SetLayout = () => {
  return (
    <>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Navbar></Navbar>
          <SettingsPage></SettingsPage>
        </div>
      </div>
    </>
  );
};

export default SetLayout;
