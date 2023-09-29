import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ITask} from "../../api/interfaces/ITask";

interface ITaskFunc {
  addTask: (task: ITask) => void;
}

const AddTask: React.FC<ITaskFunc> = ({addTask}) => {
  const [nameTask, setNameTask] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [priority, setPriority] = useState("Low");

  const currentDate = new Date();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!nameTask) {
      return;
    }
    addTask({
      id: 0,
      taskName: nameTask,
      dueDate: dueDate || new Date(),
      priority,
    });
    setDueDate(currentDate);
    setPriority("Low");
    setNameTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border px-12 py-6 bg-gray-100 rounded-2xl overflow-hidden ease-in-out duration-500">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Task Name"
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="dueDate">
          Due Date
        </label>
        <DatePicker
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="dueDate"
          selected={dueDate}
          onChange={(date: Date | null) => setDueDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select Due Date and Time"
          minDate={currentDate}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="priority">
          Priority
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-500"
          type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
