import React from "react";

export function GreetingMeeting() {
    return <div className="mt-50">
        <div>
            <p>Monday,27 October</p>
            <h1 className="pt-2 font-semibold text-3xl text-blue-600">Good Morning, Sam !👋🏻</h1>
        </div>

        <div className="w-132 h-96 bg-amber-50 mt-6 flex flex-col px-4 py-4 rounded-xl">
            <div className="h-11 flex items-center justify-center bg-gray-200 gap-29 px-2 rounded-xl">
                <div className="flex gap-3">
            <svg width="28px" height="28px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 2V6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

            <h1 className="text-xl">Monday,27 October 2025</h1>

            <svg width="28px" height="28px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            

            <div className="flex">
            <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

            <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
        </div>


        {/* meeting div */}
        <div className="flex flex-col  pt-3">
            <div className="flex border-b py-2 px-2">
            <div className="py- px-3 flex flex-col gap-1" style={{ borderRight: '2px solid cyan', height: '60px' }}>
                <h1 className="font-bold text-2xl">11:30 AM</h1>
                <h1 className="text-gray-400">11:30 AM</h1>
            </div>

            <div className="px-2 mb-1 flex flex-col ">
                <div className="flex gap-2">
                <h1 className="text-gray-400">Live</h1>
                <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff0000"><path d="M22 4.6V17.4C22 17.7314 21.7314 18 21.4 18H2.6C2.26863 18 2 17.7314 2 17.4V4.6C2 4.26863 2.26863 4 2.6 4H21.4C21.7314 4 22 4.26863 22 4.6Z" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 21.5L12 18L15.5 21.5" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V4" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12V14" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10V14" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 8V14" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
               <h1 className="font-bold text-2xl">UX Webinar</h1>
            </div>
            </div>

            <div className="flex border-b pt-2 py-2 px-2">
            <div className="py- px-3 flex flex-col gap-1" style={{ borderRight: '2px solid cyan', height: '60px' }}>
                <h1 className="font-bold text-2xl">11:30 AM</h1>
                <h1 className="text-gray-400">11:30 AM</h1>
            </div>

            <div className="px-2 mb-1 flex flex-col ">
                <div className="flex gap-2">
                <h1 className="text-gray-400">Upcoming</h1>
                <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0400ff"><path d="M22 4.6V17.4C22 17.7314 21.7314 18 21.4 18H2.6C2.26863 18 2 17.7314 2 17.4V4.6C2 4.26863 2.26863 4 2.6 4H21.4C21.7314 4 22 4.26863 22 4.6Z" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 21.5L12 18L15.5 21.5" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V4" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 8V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
               <h1 className="font-bold text-2xl">My First Webinar</h1>
            </div>
            </div>
            <div className="flex border-b pt-2 py-2 px-2">
            <div className="py- px-3 flex flex-col gap-1" style={{ borderRight: '2px solid cyan', height: '60px' }}>
                <h1 className="font-bold text-2xl">11:30 AM</h1>
                <h1 className="text-gray-400">11:30 AM</h1>
            </div>

            <div className="px-2 mb-1 flex flex-col ">
                <div className="flex gap-2">
                <h1 className="text-gray-400">Upcoming</h1>
                <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0400ff"><path d="M22 4.6V17.4C22 17.7314 21.7314 18 21.4 18H2.6C2.26863 18 2 17.7314 2 17.4V4.6C2 4.26863 2.26863 4 2.6 4H21.4C21.7314 4 22 4.26863 22 4.6Z" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 21.5L12 18L15.5 21.5" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V4" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 8V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
               <h1 className="font-bold text-2xl">Important Webinar</h1>
            </div>
            </div>
            <div className="flex  pt-2 py-2 px-2">
            <div className="py- px-3 flex flex-col gap-1" style={{ borderRight: '2px solid cyan', height: '60px' }}>
                <h1 className="font-bold text-2xl">11:30 AM</h1>
                <h1 className="text-gray-400">11:30 AM</h1>
            </div>

            <div className="px-2 mb-1 flex flex-col ">
                <div className="flex gap-2">
                <h1 className="text-gray-400">Upcoming</h1>
                <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0400ff"><path d="M22 4.6V17.4C22 17.7314 21.7314 18 21.4 18H2.6C2.26863 18 2 17.7314 2 17.4V4.6C2 4.26863 2.26863 4 2.6 4H21.4C21.7314 4 22 4.26863 22 4.6Z" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 21.5L12 18L15.5 21.5" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V4" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 8V14" stroke="#0400ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
               <h1 className="font-bold text-2xl">Webinar 1</h1>
            </div>
            </div>
        </div>
        </div>

       
    </div>
}