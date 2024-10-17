import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function NewsLetter() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Newsletter - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Stay updated with our latest news and events by subscribing to our newsletter."
        />
      </Helmet>
      <Section label="NewsLetter" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Sign up to receive MoPADA SL, our e-newsletter
          </h1>
          <p className="text-lg mb-4">
            Subscribe to receive bi-monthly updates on upcoming MOPADA SL
            events, volunteer opportunities, and important news on environmental
            topics.
          </p>

          <Link to="/news-letter-signup">
            <Button className="bg-primary text-white">SIGN UP</Button>
          </Link>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Newsletter Archive</h2>
          <p className="mb-6">
            Take a look at some of our past editions of MoPADA SL.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <MinusIcon className="text-white" />
              <span className="text-xl">2023</span>
            </div>
            <ul className="list-disc pl-8 space-y-2">
              <li>January 2023</li>
              <li>February 2023</li>
              <li>March 2023</li>
              <li>April 2023</li>
              <li>June 2023</li>
              <li>July 2023</li>
              <li>August 2023</li>
              <li>September 2023</li>
              <li>October 2023</li>
              <li>November 2023</li>
              <li>December 2023</li>
            </ul>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">2022</span>
            </div>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">2021</span>
            </div>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">2020</span>
            </div>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">2018–2019</span>
            </div>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">2016–2017</span>
            </div>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">2014–2015</span>
            </div>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">2010–2013</span>
            </div>
            <div className="flex items-center justify-between bg-primary text-white p-4">
              <PlusIcon className="text-white" />
              <span className="text-xl">Pre 2010</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
