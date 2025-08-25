import React from "react";
import { Link } from "react-router-dom";

function Primarybtn({ path, text, svg }) {
  return (
    <>
      <Link to={path} className="flex bg-purple-50 py-3.5 px-4 text-peach-99 gap-2 items-center text-sm font-medium l-150 rounded-lg 3xl:px-4.8 3xl:py-4 3xl:text-lg">
        {svg && (
          <div>
            <svg
              className="h-5 w-5 3xl:h-6 3xl:w-6"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.25 4.25C1.25 2.86929 2.36929 1.75 3.75 1.75H4.89302C5.61 1.75 6.23498 2.23796 6.40887 2.93354L7.33037 6.61952C7.48284 7.22942 7.25495 7.87129 6.75202 8.24849L5.674 9.057C5.56206 9.14096 5.53772 9.2639 5.56917 9.34974C6.51542 11.9329 8.5671 13.9846 11.1503 14.9308C11.2361 14.9623 11.359 14.9379 11.443 14.826L12.2515 13.748C12.6287 13.2451 13.2706 13.0172 13.8805 13.1696L17.5665 14.0911C18.262 14.265 18.75 14.89 18.75 15.607V16.75C18.75 18.1307 17.6307 19.25 16.25 19.25H14.375C7.12626 19.25 1.25 13.3737 1.25 6.125V4.25Z"
                fill="#FDFDFC"
              />
            </svg>
          </div>
        )}
        <div>{text}</div>
      </Link>
    </>
  );
}

export default Primarybtn;
