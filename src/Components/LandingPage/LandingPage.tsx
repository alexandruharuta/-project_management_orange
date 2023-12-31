import {Header} from "../Header/Header.tsx";
import {Card} from "../Cards/Card.tsx";
import {Footer} from "../Footer/Footer.tsx";

import {useNavigate} from "react-router-dom";

export default function LandingPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col gap-16 p-16">
      <Header />
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-78-94 text-center">
            Efficient Task <br /> Management Strategies
          </h1>
          <span className="font-light">
            Boosting Productivity and Achieving Goals
          </span>
          <div className="flex justify-center items-center gap-2">
            <button className="text-white bg-light-blue rounded-full px-6 py-2">
              Learn More
            </button>
            <button
              className="text-light-blue border border-light-blue rounded-full px-6 py-2"
              onClick={() => navigate("/register")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Card className="flex-1">
          <img src="/images/landing1.png" alt=""/>
          </Card>
        
        <Card className="flex-2">
        <img className="" src="/images/landing2.webp" alt=""/>
          </Card>
      </div>
      <Card className="p-12 flex">
        <div className="flex flex-col justify-between items-center flex-1">
          <span>ABOUT US</span>
          <button className="text-white bg-light-blue rounded-full px-6 py-2 text-14-17">
            Learn More
          </button>
        </div>
        <div className="text-30-36 flex flex-2 text-left">
          Effective solutions to manage your tasks more efficiently and
          effectively. With powerful features and an intuitive interface, we
          make sure that you can organize, track and complete your tasks with
          ease.
        </div>
      </Card>
      <div className="flex">
        <div className="flex flex-col gap-2 flex-1">
          <button className="text-light-blue border border-light-blue rounded-full px-6 py-2 w-fit">
            FEATURED
          </button>
          <span className="text-4xl">
            Allow users to enter a title for each task, providing a concise
            description of what needs to be done.
          </span>
          <span className="font-light text-sm text-gray">
            Provide a space for users to add detailed information or
            instructions related to the task
          </span>
        </div>
        <div className="flex-2 ml-36"> 
        <img  className=" h-3/4" src="/images/landing3.png" alt=""/>
        </div>
      </div>
      <div className="flex">
        <div className="flex-2">
        <img className="rounded-lg h-3/4 w-fit" src="/images/landing4.png" />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <button className="text-light-blue border border-light-blue rounded-full px-6 py-2 w-fit">
            FEATURED
          </button>
          <span className="text-4xl">
            Enable users to assign a priority level to indicate the importance
            or urgency of the task.{" "}
          </span>
          <span className="font-light text-sm text-gray">
            Enable users to assign a priority level (Backlog, In Progress,
            Review, Competed) to indicate the importance or urgency of the task.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
