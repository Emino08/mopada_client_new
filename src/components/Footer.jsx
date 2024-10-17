import { Link } from "react-router-dom";
import React from "react";
import mopadaLogo from "/assets/MoPADA-SL-LogoFo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white ">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <img
            alt="MoPADA SL logo"
            className="h-28 w-28 mx-auto"
            // height="40"
            src={mopadaLogo}
            style={{
              aspectRatio: "128/64",
              objectFit: "cover",
            }}
            // width="128"
          />
          <p className="mt-4 text-md">
            10 Brima Lane, Off Bo Kenema Highway Kennedy Section
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-xl">ABOUT</h5>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="text-md hover:underline" to="about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-md hover:underline" to="privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-md hover:underline" to="gift-policy">
                Gift Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold  text-xl">LEARN</h5>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="text-md hover:underline" to="newsletter">
                Newsletter
              </Link>
            </li>
            <li>
              <Link className="text-md hover:underline" to="blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold  text-xl">CONNECT</h5>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="text-md hover:underline" to="donation">
                Donate
              </Link>
            </li>
            <li>
              <Link className="text-md hover:underline" to="volunteer">
                Volunteer
              </Link>
            </li>
            <li>
              <Link className="text-md hover:underline" to="job-opportunities">
                Job Opportunities
              </Link>
            </li>
            <li>
              <Link className="text-md hover:underline" to="contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary py-4 w-full border-t border-b-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-md">
          &copy; {new Date().getFullYear()} MoPADA SIERRA LEONE. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
