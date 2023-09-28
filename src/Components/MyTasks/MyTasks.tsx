import TableRow from "./TableRow"

const MyTasks = () => {
  const taskName = 'Toggle button func'
  const dueDate = '28.09'
  const priority = 'High'
  return (
    <>
      <div className="border rounded-lg w-56 h-9 flex items-center gap-2 ml-5 mt-5 opacity-50">
        <svg
          className="w-4 h-4 ml-2 text-gray-800 dark:text-white opacity-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <p>Search for tasks</p>
      </div>

      <p className="font-medium text-2xl ml-5 mt-3">Active Tasks</p>

      <div className="container mx-auto mt-10">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Task Name
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            {/* You can map over your data and create rows here */}
            <TableRow taskName = {taskName} dueDate = {dueDate} priority = {priority} />
            {/* Add more rows as needed */}
          </tbody>
        </table>
    </div>
    </>
  )
}

export default MyTasks
