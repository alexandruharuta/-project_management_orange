import { AiOutlineCheckCircle } from "react-icons/ai"

interface IRow{
    id:number;
    taskName:string;
    dueDate:Date;
    priority:string;
}

interface ITaskList {
  tasks: IRow[];
  removeOnComplete:Function;
}

const TableRow: React.FC<ITaskList> = ({tasks, removeOnComplete}) => {
  return (
    <>
      {tasks.map((task) => (
        <tr key={task.id} className="bg-white">
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <button onClick={() => removeOnComplete(task.id)}>
                <AiOutlineCheckCircle className="mr-2 text-gray-500 hover:text-black hover:bg-green-500 rounded-full ease-in-out duration-500 text-3xl"/>
              </button>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {task.taskName}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {task.dueDate.toLocaleString('eu-EU', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {task.priority}
            </td>
        </tr>
      ))}
    </>
  )
}

export default TableRow