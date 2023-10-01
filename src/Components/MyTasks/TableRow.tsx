import React from "react";

interface IRow {
  key: number;
  taskName: string;
  dueDate: Date;
  priority: string;
  projectName: string;
}

function formatDueDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const TableRow: React.FC<IRow> = ({
  key,
  taskName,
  dueDate,
  priority,
  projectName,
}) => {
  return (
    <tr key={key} className="bg-white">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        Complete
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {taskName}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {formatDueDate(dueDate)}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {projectName}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {priority}
      </td>
    </tr>
  );
};

export default TableRow;
