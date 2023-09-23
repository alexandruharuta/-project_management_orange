import "./App.css";
import Layout from "./Components/Layout/Layout";
import LoginRegister from "./Components/LandingPage/LandingPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomeLayout from "./Components/Dashboard/HomeLayout";
import MyTasksLayout from "./Components/MyTasks/MyTasksLayout";

function App() {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello 2</h1>
      <Button className='bg-sky-500/75 px-3 py-2 text-sky-50 rounded-lg'>Button</Button> */}
      <LandingPage />
      <Layout />
      <LoginRegister />
      <MyTasksLayout />
      <HomeLayout />
    </>
  );
}

export default App;
