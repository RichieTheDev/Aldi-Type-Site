import React from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";

function App() {
  return (
    <>
      <div>
        <div className="bg-blue-800 text-white">
          <div className="flex justify-center items-center mx-auto px-3 py-3 sm:py-1 space-x-4 text-xs">
            <a href="#" className="hover:text-yellow-500 hidden sm:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Career
            </a>

            <a href="#" className="text-lg hidden sm:inline">
              {" "}
              |{" "}
            </a>

            <a href="#" className="hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hidden sm:inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              HELP
            </a>

            <a href="#" className="text-lg hidden sm:inline">
              {" "}
              |{" "}
            </a>

            <a href="#" className="hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg "
                className="h-6 w-6 hidden sm:inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="uppercase sm:inline sm:capitalize">Store</span>
              <span className="hidden sm:inline">finder</span>
            </a>

            <a href="#" className="text-lg hidden sm:inline">
              |
            </a>
            <a href="#" className="hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hidden sm:inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              CHECKOUT
            </a>

            <a href="#" className="hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hidden sm:inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span className="uppercase sm:inline sm:capitalize">Login</span>
              <span className="hidden sm:inline">/Register</span>
            </a>
          </div>
        </div>
      </div>
      <section>
        <div className="hidden sm:flex justify-center mt-8 mx-auto">
          <div className="flex w-1/2">
            <select className=" items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg  focus:outline-none">
              <option>Home</option>
              <option>Food</option>
              <option>Wine</option>
            </select>

            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50    border border-gray-300 "
                placeholder="What are You Waiting for?"
              />
              <button
                type="submit"
                className="absolute  top-0 right-0 py-2.5 px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 "
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <ul className="flex lg:justify-center sm:leading-none flex-row mt-6 mx-4 justify-between text-center sm:space-x-10 items-baseline sm:items-center font-bold cursor-pointer">
            <li className=" hover:underline decoration-yellow-500 decoration-2 underline-offset-8">
              Special Buys
            </li>
            <li className="hover:underline hidden sm:inline decoration-yellow-500 decoration-2 underline-offset-8">
              Garden Shop
            </li>
            <li className="hover:underline hidden sm:inline decoration-yellow-500 decoration-2 underline-offset-8">
              Health & Beauty
            </li>
            <li className="hover:underline hidden lg:inline  decoration-yellow-500 decoration-2 underline-offset-8">
              Camping
            </li>
            <li className="hover:underline  decoration-yellow-500 decoration-2 underline-offset-8">
              Home Store
            </li>
            <li className="hover:underline hidden lg:inline decoration-yellow-500 decoration-2 underline-offset-8">
              Wines & Spirits
            </li>
            <li className="border-2 hidden lg:inline border-red-600 text-slate-100 bg-red-600  p-1.5 hover:underline decoration-yellow-500 decoration-2 underline-offset-8">
              Sale
            </li>
            <li className="hover:underline decoration-yellow-500 decoration-2 underline-offset-8">
              Groceries
            </li>
            <li className="hover:underline hidden lg:inline decoration-yellow-500 decoration-2 underline-offset-8">
              Recipes
            </li>
            <li className="hover:underline hidden sm:inline decoration-yellow-500 decoration-2 underline-offset-8">
              Aldi Hub
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="">
          <div className="sm:flex text-black bg-amber-500 space-x-6 justify-center p-3.5 mt-3 items-center text-center">
            <p className=" text-lg font-extrabold sm:font-black sm:mr-14 ">
              Free standard delivery on orders over £30.
            </p>
            <p className="hidden sm:inline text-xl text-white">|</p>
            <p className="sm:ml-10 text-lg  font-extrabold sm:font-black">
              Some advertised Specialbuys are delayed.{" "}
            </p>
            <a
              href="#"
              className="text-blue-700  text-lg font-extrabold underline sm:text-sm"
            >
              Latest update here
            </a>
          </div>
        </div>
      </section>

      <div className="relative bg-red-700 text-center  h-1/2 text-white p-5 ">
        <p className="text-3xl ">THE AMAZING</p>
        <p className="text-5xl font-bold ">SPECIAL BUY</p>
        <p className="text-8xl font-extrabold ">SALE!</p>
        <div className="absolute sm:right-12 sm:top-28 lg:top-24 lg:right-24 hidden sm:inline text-center rounded-full  p-5 leading-none rotate-12 text-red-700  bg-white">
          <p className="p-0.5 font-bold">NOW WITH</p>
          <p className="p-0.5 font-extrabold text-xl">EVEN MORE</p>
          <p className="p-0.5 font-bold">LINES</p>
          <p className="p-0.5 font-extrabold  text-xl">ADDED</p>
        </div>
        <button className="relative rounded-full p-3 px-6 mt-10 pt-2 animate-bounce font-bold text-white bg-blue-700 hover:bg-blue-900 ">
          SAVE NOW
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="bg-blue-600 hidden sm:flex justify-center flex-col sm:flex-row">
        <h1 className="p-6  my-auto  text-white text-4xl text-center">
          In Store And Online This week
        </h1>
        <p className="border rounded-lg sm:p-4 sm:mr-2 font-bold bg-white text-black text-center items-center my-3 ">
          Fruits & Veg <img src={img1} className="mt-2 items-center  mx-auto" />
        </p>
        <p className="border rounded-lg sm:p-4 sm:mr-2 font-bold bg-white text-black text-center items-center  my-3 ">
          Meat Offers <img src={img2} className="mt-2 items-center  mx-auto" />
        </p>
        <p className="border rounded-lg sm:p-4 sm:mr-2 font-bold bg-white text-black text-center items-center my-3 ">
          Price drop <img src={img3} className="mt-2 items-center  mx-auto" />
        </p>
        <p className="border rounded-lg sm:p-4 sm:mr-2 font-bold bg-white text-black text-center items-center my-3 ">
          Bedroom <img src={img4} className="mt-2 items-center  mx-auto" />
        </p>
        <p className="border rounded-lg sm:p-4 sm:mr-2 font-bold bg-white text-black text-center items-center my-3 ">
          Kitchen <img src={img5} />
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center rounded-lg border border-gray-200 shadow-2xl">
        <img className="rounded-t-lg  sm:h-1/2 sm:w-1/2" src={img7} />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              HP 255 G6 Notebook PC
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">
            THIS IS THE FUTURE OF INNOVATION AND CREATIVITY.
          </p>
          <button className="items-center py-2 px-4 text-sm font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            BUY NOW
          </button>
        </div>
      </div>

      <div className=" border-2 p-7 text-zinc-900 bg-slate-200 flex flex-col px-4  space-y-12 sm:space-y-0 sm:flex-row shadow-lg mt-5">
        <div className="flex flex-col space-y-12 sm:w-1/2">
          <h2 className="text-4xl font-bold text-center ">
            Find Something amazing everyday
          </h2>
          <p className="p-4  text-center ">
            <img
              src="https://cdn.aldi-digital.co.uk//C_Icon1-newsletterPNG_20210303_UK.png?o=d5pU6X4EYpQVX%24Rz2O0%248wnYUcAp&V=QZuX"
              className="object-scale-down w-16 h-10 mx-auto sm:inline"
            />{" "}
            Our Specialbuy shop has new arrivals every Thursday and Sunday. You
            can either buy direct from your local store the day they go on sale,
            or{" "}
            <span className="font-bold">
              order from our online shop up to a week in advance.
            </span>
          </p>
          <p className="p-4  text-center ">
            <img
              src="https://cdn.aldi-digital.co.uk//C_Icon2-newsletterPNG_20210303_UK.png?o=dDo7HXB3BDOPu8a9vxUIA%24u6PjUp&V=59Pv"
              className="object-scale-down w-16 h-10 mx-auto sm:inline"
            />{" "}
            Specialbuys are the unique and exciting{" "}
            <span className="font-bold">great value products you</span> find
            online at Aldi and in store. They cover a wide range of activities
            and hobbies, from Cooking, Gardening, DIY, Sports, Electricals, and
            much, much more.
          </p>
          <p className="p-4  text-center ">
            <img
              src="https://cdn.aldi-digital.co.uk//C_Icon3-newsletterPNG_20210303_UK.png?o=AT59WbFAI0akFuRVsmjU2dFFRoUp&V=hevH"
              className="object-scale-down w-16 h-10 mx-auto sm:inline"
            />{" "}
            To avoid missing out on that 58-inch Smart TV or Wine Cooler,{" "}
            <span className="font-bold">
              sign up to our weekly Specialbuys newsletter
            </span>{" "}
            and we’ll let you know what’s on sale now and what’s coming up next
          </p>
        </div>
        <div className="flex container mx-auto flex-col border-t sm:border-l border-slate-50  space-y-8 sm:w-1/2">
          <p className="mx-auto mt-16 p-6 font-bold text-2xl">
            Sign up to our latest offers
          </p>
          <form className="items-center text-center">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-1/2 mx-auto p-2.5"
              placeholder="Enter email"
              required
            />
            <button
              type="submit"
              className="p-2.5 text-sm font-medium block mx-auto sm:inline sm:mx-0 text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 "
            >
              SUBMIT
            </button>
            <p className="mt-2 text-sm">
              To find out about how we use your information please visit our{" "}
              <span className="font-bold hover:underline">Privacy Notice</span>
            </p>
            <p>
              Please{" "}
              <span className="font-bold hover:underline">click here</span> to
              unsubscribe
            </p>
          </form>
        </div>
      </div>

      <footer className="p-4 bg-white text-black rounded-lg shadow sm:px-6 sm:py-8 ">
        <div className="sm:flex items-center space-x-5 justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
              <a href="#" className="mr-4 hover:underline sm:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline sm:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline sm:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" className="hover:underline">
            ™
          </a>
          . Content texts from aldi website.
        </span>
      </footer>
    </>
  );
}

export default App;
