import React from "react";

interface ITask {
  id: number;
  taskName: string;
  dueDate: string;
  priority: string;
}

interface Task {
  task: ITask;
}

const Task: React.FC<Task> = ({task}) => {
  return (
    <div className="flex justify-between items-center border-t-2 border-gray py-2 px-8 my-2">
      <h3 className="text-lg font-bold"><button>{task.taskName}</button></h3>
      <h3 className="text-base text-gray font-semibold">Due Date: <span className="text-dark">{task.dueDate}</span></h3>
      <h3 className="text-base font-semibold">Priority: <span className="text-base text-red0">{task.priority}</span></h3>
    </div>
  );
};

export default Task;
