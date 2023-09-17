export default function Navbar() {
  return (
    <div className="flex justify-between border-b w-full p-4">
      <div className="bg-sky-100 flex items-center">
        <div className="w-6 h-6 bg-blue rounded-lg"></div>
        <p className="ml-3">Project Name</p>

        <svg
          className="w-6 h-6 text-gray-800 dark:text-white ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 4"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1"
            d="M2.49 2h.01m6 0h.01m5.99 0h.01"
          />
        </svg>
      </div>

      <div className="flex items-center ">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <button className="ml-1">Create</button>

        <button>
          <svg
            className="w-4 h-4 text-gray-800 dark:text-white ml-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
            />
          </svg>
        </button>

        <button className="w-200 h-200"></button>
      </div>
    </div>
  );
}
