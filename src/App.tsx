import "./App.css";
import Layout from "./Components/Layout/Layout";
import LoginPage from "./Pages/LoginPage";
import Project from "./Pages/Project";

function App() {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello 2</h1>
      <Button className='bg-sky-500/75 px-3 py-2 text-sky-50 rounded-lg'>Button</Button> */}
      <Layout />
      <LoginPage />
    </>
  );
}

export default App;
