import React from "react";
import Primarybtn from "../components/Buttons/Primarybtn";
import { Link } from "react-router-dom";

function Home() {
  const herocounter = [
    {
      id: 1,
      text: "55",
      subtext: "Completed Projects",
    },
    {
      id: 2,
      text: "20",
      subtext: "Happy Customers",
    },
    {
      id: 3,
      text: "08",
      subtext: "Years of Experience",
    },
  ];
  return (
    <>
      <section className="px-4 flex flex-col gap-7.5 ll2:flex-row ll2:px-0 ll2:justify-end ll2:gap-0 ll2:items-center ll2:pl-20">
        <div className="w-fit m-auto ll2:order-2 ll2:m-0">
          <picture>
            <source
              srcSet="https://i.imgur.com/jI0Rr0h.png"
              media="(min-width: 1920px)"
            />
            <source
              srcSet="https://i.imgur.com/onZw1IZ.png"
              media="(min-width: 1000px)"
            />
            <img src="https://i.imgur.com/lik3jcJ.png" alt="logo" />
          </picture>
        </div>
        <div className="">
          <div className="ll2:pr-20 3xl:pr-[156px]">
            <div className="text-lg font-medium l-150 text-gray-30 py-2 px-3.5 bg-peach-95 rounded-10 w-fit m-auto mb-3.5 ll2:m-0 ll2:mb-5 ll2:text-22 3xl:py-2.5 3xl:px-4.8 3xl:rounded-[13px] 3xl:mb-5 3xl:text-28">
              Hello There 🤗
            </div>
            <div className="text-center space-y-2 mb-6 max-w-[678px] m-auto ll2:text-left ll2:m-0 ll2:mb-7.5 ll2:space-y-2.5 3xl:max-w-[787px] 3xl:mb-12.5">
              <h1 className="text-38 font-semibold l-150 text-gray-10 ll2:text-5xl 3xl:text-58">
                Jeffery Cannon Welcome’s You!
              </h1>
              <p className="text-sm text-gray-30 l-150 ll2:text-base 3xl:text-lg">
                I am a passionate and experienced web designer, dedicated to
                creating visually stunning and highly functional websites.
                Explore my portfolio to see the power of effective design in
                action
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 mb-10 ll2:justify-start ll2:mb-14.5 3xl:gap-10 3xl:mb-20">
              <Primarybtn path="/contact" text="Book a Call" svg={true} />
              <Link
                to="/portfolio"
                className="flex items-center gap-1 text-sm font-medium l-150 text-gray-10 3xl:text-lg"
              >
                View Portfolio{" "}
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 ll2:grid-cols-3 ll2:w-full ll2:bg-peach-96 ll2:py-6 ll2:px-10 ll2:rounded-l-xl 3xl:gap-7.5 3xl:py-10 3xl:px-12.5">
            {herocounter.map((data, i) => {
              return (
                <div
                  key={data.id}
                  className={`${
                    i === 0 && "col-span-2 ll2:col-span-1"
                  } bg-peach-96 py-4 text-center rounded-lg ll2:w-[210px] ll2:p-0 ll2:text-left 3xl:w-[261px]`}
                >
                  <h3 className="text-2xl font-bold l-150 text-gray-20 ll2:text-38 3xl:text-5xl">
                    {data.text}
                    <span className="text-purple-50">+</span>
                  </h3>
                  <p className="text-sm font-medium text-gray-30 l-150 3xl:text-lg">
                    {data.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
