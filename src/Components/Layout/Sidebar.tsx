import React from "react";

export default function Sidebar() {
    return (
        <div className="bg-dark w-80 min-h-screen flex flex-col justify-between">
            <div>
                <div className="border-b border-white10 h-16 px-4 flex items-center">
                    <p className="text-white">Name Surname</p>
                </div>
                <div className="p-6 border-b border-whitelight">
                    <a href="" className="text-white">Home</a>
                </div>
                <div className="p-6">
                    <a href="" className="text-white block mb-3">Project Name 1</a>
                    <a href="" className="text-white block mb-3">Project Name 2</a>
                    <a href="" className="text-white block mb-3">Project Name 3</a>
                    <a href="" className="text-white block mb-3">Project Name 4</a>

                </div>
            </div>
            <div>
                Name
            </div>

        </div>
    );
}
