import "./App.css";
import Layout from "./components/layout/Layout";
import LoginRegister from "./pages/landing-page/LandingPage";
import LandingPage from "./pages/landing-page/LandingPage";
import MyTasks from "./components/my-tasks/MyTasks";

function App() {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello 2</h1>
      <Button className='bg-sky-500/75 px-3 py-2 text-sky-50 rounded-lg'>Button</Button> */}
      <LandingPage />
      <Layout />
      <LoginRegister />
      <MyTasks />
    </>
  );
}

export default App;
