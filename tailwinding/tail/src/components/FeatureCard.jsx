import React from "react";

export function FeatureCard() {
  return (
    <div className="bg-amber-50 w-87 h-72 mt-73 rounded-xl p-4">
      <div className="flex flex-col gap-6">
        {/* Top row with two items */}
        <div className="flex justify-between gap-6">
          {/* part1 - Schedule a Webinar */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-teal-300 rounded flex items-center justify-center p-2">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#0300a3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 9.25C2.58579 9.25 2.25 9.58579 2.25 10V19C2.25 20.5188 3.48122 21.75 5 21.75H14.5681L14.4091 21.591C13.5304 20.7123 13.5304 19.2877 14.4091 18.409C15.2878 17.5303 16.7124 17.5303 17.5911 18.409L18.0001 18.818L20.4091 16.409C20.7847 16.0334 21.2601 15.8183 21.75 15.7639V10C21.75 9.58579 21.4142 9.25 21 9.25H3Z"
                  fill="#0300a3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V6C7.75 6.41421 7.41421 6.75 7 6.75C6.58579 6.75 6.25 6.41421 6.25 6V4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V10C3.75 10.4142 3.41421 10.75 3 10.75C2.58579 10.75 2.25 10.4142 2.25 10V6C2.25 4.48122 3.48122 3.25 5 3.25H6.25V2C6.25 1.58579 6.58579 1.25 7 1.25ZM15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V6C15.75 6.41421 15.4142 6.75 15 6.75C14.5858 6.75 14.25 6.41421 14.25 6V4.75H10.5C10.0858 4.75 9.75 4.41421 9.75 4C9.75 3.58579 10.0858 3.25 10.5 3.25H14.25V2C14.25 1.58579 14.5858 1.25 15 1.25ZM17.75 4C17.75 3.58579 18.0858 3.25 18.5 3.25H19C20.5188 3.25 21.75 4.48122 21.75 6V10C21.75 10.4142 21.4142 10.75 21 10.75C20.5858 10.75 20.25 10.4142 20.25 10V6C20.25 5.30964 19.6904 4.75 19 4.75H18.5C18.0858 4.75 17.75 4.41421 17.75 4Z"
                  fill="#0300a3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4698 19.4697C15.7627 19.1768 16.2376 19.1768 16.5304 19.4697L18.0001 20.9393L21.4698 17.4697C21.7627 17.1768 22.2376 17.1768 22.5304 17.4697C22.8233 17.7626 22.8233 18.2374 22.5304 18.5303L18.5304 22.5303C18.2376 22.8232 17.7627 22.8232 17.4698 22.5303L15.4698 20.5303C15.1769 20.2374 15.1769 19.7626 15.4698 19.4697Z"
                  fill="#0300a3"
                ></path>
              </svg>
            </div>
            <h1>Schedule a Webinar</h1>
          </div>

          {/* part2 - Join a Webinar */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-teal-300 rounded flex items-center justify-center p-2">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#0300a3"
                stroke-width="1.5"
              >
                <path
                  d="M12 7V3H7V7H12ZM17 21H19V7H17V21ZM5 21H7V12H5V21ZM12 21H14V14H12V21ZM3 0H21V2H3V0Z"
                  fill="#0300a3"
                ></path>
              </svg>
           
            </div>
            <h1>Join a Webinar</h1>
          </div>
        </div>

        {/* part3 - Open Recordings */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="w-12 h-12 bg-teal-300 rounded flex items-center justify-center p-2">
            <svg
              width="28px"
              height="28px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#0300a3"
            >
              <path
                d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
                stroke="#0300a3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
                stroke="#0300a3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 2V6"
                stroke="#0300a3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
                stroke="#0300a3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h1>Open Recordings</h1>
        </div>
      </div>
    </div>
  );
}