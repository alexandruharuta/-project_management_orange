import { useState } from 'react';
import CreateModal from '../Modal/CreateModal';


export default function Navbar() {
  const [createModal, setCreateModal] = useState(false);
  const handleOnClose = () => setCreateModal(false);
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div className="flex justify-between border-b border-dark10 w-full h-16 px-4">
      <div className="flex items-center">
        <div className="w-7 h-7 bg-blue rounded-lg font-semibold text-lg text-indigo flex align-center justify-center">
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
        <button 
         onClick={() => setCreateModal(true)}
         className="flex items-center rounded-3xl px-4 py-1.5 bg-blue0">
          <p className="ml-1 text-sm text-indigo">Create</p>
          <svg
            className="w-2 h-2 text-gray-800 ml-2 text-indigo"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
          <CreateModal onClose={handleOnClose} visible={createModal}/>
        <button>
          {/* Menu */}
          <svg
            className="w-4 h-4 mr-4 text-gray-800 ml-10 text-dark50 hover:text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
            />
          </svg>
        </button>
        <button>
          {/* Notification */}
          <svg
            className="w-5 h-5 mr-4 text-gray-800 text-dark50 hover:text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 21"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"
            />
          </svg>
        </button>
        <div className="flex items-center relative">
          <button onClick={handleClick} className="w-6 h-6 bg-blue0 rounded-full bg-gray0 text-white0 text-xs">
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
          {isShown && <Profile />}
        </div>

        <button className="w-200 h-200"></button>
      </div>
    </div>
  );
}


function Profile() {
  return (
    <div className='absolute border w-64 h-64 -left-64 top-11'>

    </div>
  );
}