export default function MyTasks() {
  return (
    <div>
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

      <div className="ml-5 mt-10 flex items-center gap-2">
        <div className="bg-gray0 rounded-full w-3 h-3"></div>
        <p>Backlog</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-lg w-56 h-24 bg-light-gray ml-5 mt-5 font-medium">
          <div className="ml-3 mt-2">
            <div className="w-10 h-0.5 rounded-lg bg-gray0 "></div>
            <p className="text-base mt-5">Modal app wireframes</p>
            <div className="flex items-center mt-5 text-sm">
              <div className="flex items-center gap-7 text-xs">
                <div className="flex items-center gap-1 ">
                  <div className="bg-red0 rounded-full w-2 h-2"></div>
                  <p>High</p>
                </div>
                <p>Feb 6</p>
              </div>

              <div className="ml-16 flex items-center ">
                <button className="w-5 h-5 bg-blue0 rounded-full -mr-2 bg-gray0 text-white text-xs ">
                  N
                </button>
                <button className="w-5 h-5 bg-blue0 rounded-full  bg-yellow0 text-white text-xs">
                  F
                </button>
              </div>
            </div>
          </div>
          <div className="bg-light-gray rounded-lg w-56 h-24 mt-5 font-medium">
            <div className="ml-3 mt-2">
              <div className="w-10 h-0.5 rounded-lg bg-gray0 "></div>
              <p className="text-base mt-5">Modal app wireframes</p>
              <div className="flex items-center mt-5 text-sm">
                <div className="flex items-center gap-7 text-xs">
                  <div className="flex items-center gap-1 ">
                    <div className="bg-red rounded-full w-2 h-2"></div>
                    <p>High</p>
                  </div>
                  <p>Feb 6</p>
                </div>

                <div className="ml-16 flex items-center ">
                  <button className="w-5 h-5 bg-blue0 rounded-full -mr-2 bg-gray0 text-white text-xs ">
                    N
                  </button>
                  <button className="w-5 h-5 bg-blue0 rounded-full  bg-yellow0 text-white text-xs">
                    F
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg w-56 h-24 bg-light-gray ml-5 mt-5 font-normal">
          <div className="flex grid justify-items-center mt-6 text-sm">
            <p>+</p>
            <p>Add a new status</p>
          </div>
        </div>
      </div>
    </div>
  );
}
