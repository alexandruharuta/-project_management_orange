import React from 'react';


export const Footer: React.FC = () => (
    <div className="bg-dark-gray rounded-lg flex flex-col p-16 text-light-gray-300 gap-12">
        <hr className="bg-white text-white" />
        <div className="flex items-center justify-between">
            <div className="mr-auto flex-1 flex flex-col gap-8 ">
                <span className="text-5xl">Logo</span>
                <span className="font-light">Boosting Productivity and <br /> Achieving Goals</span>
            </div>
            <div className="flex flex-3 justify-end gap-24">
                <div className="flex flex-col gap-4 items-start">
                    <span className="text-white">Home</span>
                    <span>About Us</span>
                    <span>Pricing</span>
                    <span>Download</span>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <span className="text-white">Features</span>
                    <span>Get Started</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <span className="text-white">Social Media</span>
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                </div>
            </div>
        </div>
    </div>
)
