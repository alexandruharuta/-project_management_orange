import React from 'react';


export const Footer: React.FC = () => (
    <div className="bg-dark-gray rounded-lg flex flex-col p-16 text-light-gray-300 gap-12">
        <hr className="bg-white text-white" />
        <div className="flex items-center justify-between">
            <div className="mr-auto flex-1 flex flex-col gap-8 ">
                <span className="text-24-34">Logo</span>
                <span className="font-light text-12-14">Boosting Productivity and <br /> Achieving Goals</span>
            </div>
            <div className="flex flex-3 justify-end gap-24">
                <div className="flex flex-col gap-4 items-start">
                    <span className="text-white text-16-19">Home</span>
                    <span className="text-14-17">About Us</span>
                    <span className="text-14-17">Pricing</span>
                    <span className="text-14-17">Download</span>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <span className="text-white text-16-19">Features</span>
                    <span className="text-14-17">Get Started</span>
                    <span className="text-14-17">Privacy Policy</span>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <span className="text-white text-16-19">Social Media</span>
                    <span className="text-14-17">Instagram</span>
                    <span className="text-14-17">LinkedIn</span>
                </div>
            </div>
        </div>
    </div>
)
