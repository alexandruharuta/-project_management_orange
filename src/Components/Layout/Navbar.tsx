import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between ...">
      <div className="bg-sky-100 p-8 flex items-center">
        {/* <img className="w-8" src="src/assets/Group 1.jpg" alt="" /> */}

        <p className="ml-5">Project Name</p>

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
            stroke-width="2"
            d="M2.49 2h.01m6 0h.01m5.99 0h.01"
          />
        </svg>
      </div>

      <div className="p-8 flex items-center ">
        <svg
          class="w-4 h-4 text-gray-800 dark:text-white"
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
              stroke-width="2"
              d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
            />
          </svg>
        </button>

        <button className="w-200 h-200"></button>
      </div>
    </div>
  );
}
