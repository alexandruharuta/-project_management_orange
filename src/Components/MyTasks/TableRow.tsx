
interface IRow{
    taskName:string;
    dueDate:string;
    priority:string;
}

const TableRow: React.FC<IRow> = ({taskName, dueDate, priority}) => {
  return (
    <tr className="bg-white">
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {taskName}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {dueDate}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {priority}
        </td>
    </tr>
  )
}

export default TableRow