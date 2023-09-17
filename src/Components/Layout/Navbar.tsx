export default function Navbar() {
  return (
    <div className="flex justify-between border-b w-full p-4">
      <div className="bg-sky-100 flex items-center">
        <div className="w-6 h-6 bg-blue rounded-lg font-semibold text-lg text-indigo">
          P
        </div>
        <p className="ml-3 font-semibold text-lg">Project Name</p>

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

      <div className="flex items-center ">
        <button className="flex items-center border-solid border border-black-600 rounded-3xl pb-0.5 pt-0.5 pr-2 pl-2 border">
          {" "}
          <svg
            className="w-3 h-3 text-gray-800 dark:text-white"
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
          <p className="ml-1 text-sm">Create</p>
        </button>

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
        <div className="flex items-center">
          <button className="w-6 h-6 bg-blue rounded-full ml-3 bg-gray text-white text-xs">
            N
          </button>
          <svg
            className="w-3 h-3 text-sky sky:text-white mt-3 -ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
            />
            <path
              fill="#fff"
              d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
            />
          </svg>
        </div>

        <button className="w-200 h-200"></button>
      </div>
    </div>
  );
}
