import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"

interface ITask {
  id: number;
  taskName: string;
  dueDate: Date;
  priority: string;
}

interface Task {
  task: ITask;
  removeOnComplete: Function;
}

const Task: React.FC<Task> = ({task, removeOnComplete}) => {
  const formattedDueDate = task.dueDate.toLocaleDateString();

  return (
    <div className="flex justify-between border-t-2 border-gray py-2 px-8 my-2 items-center">
      <h3 className="text-lg font-bold flex items-center">
        <button onClick={() => removeOnComplete(task.id)}>
          <AiOutlineCheckCircle className="mr-2 text-gray-500 hover:text-black hover:bg-green-500 rounded-full ease-in-out duration-500 text-3xl"/>
        </button>
        <button>{task.taskName}</button>
      </h3>
      <h3 className="text-base text-gray font-semibold">Due Date: <span className="text-dark">{formattedDueDate}</span></h3>
      <h3 className="text-base font-semibold">Priority: <span className="text-base text-red0">{task.priority}</span></h3>
    </div>
  );
};

export default Task;
