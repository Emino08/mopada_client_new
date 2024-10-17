import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-[#f8f8f8] text-center">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. It might have been moved or deleted."
        />
      </Helmet>
      <h1 className="text-[144px] font-extrabold text-[#6f42c1]">404</h1>
      <p className="text-[40px] font-bold text-gray-800">
        oops! Page not found
      </p>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <div className="mt-8 flex space-x-4">
        <Link
          to={"/"}
          className="bg-green-600 text-white hover:bg-green-700 p-3 rounded-lg"
        >
          HOME
        </Link>
        <Link
          to={"/contact-us"}
          className="bg-red-600 text-white hover:bg-red-700 p-3 rounded-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Page404;
