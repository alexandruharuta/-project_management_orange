export default function Project() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between text-gray border-b border-b-gray p-4">
        <div className="flex items-center">
          <svg
            className="w-3 h-3 text-gray gray:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
          <p className="pl-5 font-medium text-xs">Name</p>
        </div>

        <div className="pr-10 gap-40 flex items-center font-medium text-xs">
          <div>
            <p>Asignee</p>
          </div>

          <p>Due date</p>
          <p>Priority</p>

          <svg
            className="w-4 h-4 text-gray gray:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center pt-2 justify-between font-medium text-opacity-2 border-b p-2 border-b-gray">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-bluetask dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>

          <p className="pl-5">Mobile app wireframes</p>
        </div>

        <div className="pr-10 gap-40 flex items-center text-sm">
          <div>
            <button className="w-6 h-6 bg-blue rounded-full -mr-2 bg-gray text-white text-xs ">
              N
            </button>
            <button className="w-6 h-6 bg-blue rounded-full  bg-yellow text-white text-xs">
              F
            </button>
          </div>

          <p>Feb 6</p>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-red red:text-red"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1v18M1 3.652v9c5.6-5.223 8.4 2.49 14-.08v-9c-5.6 2.57-8.4-5.143-14 .08Z"
              />
            </svg>

            <p>High</p>
          </div>

          <svg
            className="w-6 h-6 text-gray-800 dark:text-white ml-2 opacity-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 4"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M2.49 2h.01m6 0h.01m5.99 0h.01"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
