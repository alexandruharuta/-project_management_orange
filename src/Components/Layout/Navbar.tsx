import React from "react";

export default function Navbar() {
    return (
        <div className="bg-sky-100 p-4 flex items-center border-b w-full">
            <img className="w-8" src="src/assets/Group 1.jpg" alt="" />
            <p className="ml-5">Project Name</p>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <button>Create</button>
        </div>
    )
}