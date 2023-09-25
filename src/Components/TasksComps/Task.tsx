const Task = () => {
  return (
    <div className="flex justify-between items-center border-t-2 border-gray py-2 px-8 my-2">
      <h3 className="text-lg font-bold"><button>Task</button></h3>
      <h3 className="text-base text-gray font-semibold">Due Date: <span className="text-dark">5 Oct</span></h3>
      <h3 className="text-base font-semibold">Priority: <span className="text-base text-red">High</span></h3>
    </div>
  );
};

export default Task;
