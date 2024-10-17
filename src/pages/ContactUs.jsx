import { Button, Textarea, TextInput } from "flowbite-react";
import React from "react";
import Map from "../components/Map";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function ContactUs() {
  return (
    <div>
      <div className="mt-28">
        <Helmet>
          <title>
            Contact Us - Movement towards Peace And Development Agency
            (MoPADA-SL)
          </title>
          <meta
            name="description"
            content="Get in touch with us for any queries or support."
          />
        </Helmet>
        <Section label="Contact Us" />
        <section className="relative z-0">
          <div className="z-0">
            <Map />
          </div>
        </section>
        <section className="relative z-10">
          <div className="mt-8 sm:mt-14 md:mt-16  lg:mt-[-200px] z-50 ">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center shadow-lg rounded-2xl shadow-black">
                <div className="flex-1 bg-white text-primary lg:rounded-l-2xl rounded-t-2xl p-8">
                  <h2 className="text-3xl font-bold mb-6 text-left">
                    Send us a message
                  </h2>
                  <form className="space-y-4">
                    <TextInput placeholder="Name" type="text" />
                    <TextInput placeholder="Email" type="email" />
                    <TextInput placeholder="Subject" type="text" />
                    <Textarea placeholder="Message" />
                    <Button color="blue">Submit</Button>
                  </form>
                </div>
                <div className="flex-1 bg-primary text-white p-8 h-full text-left lg:rounded-r-2xl rounded-b-2xl">
                  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                  <p className="mb-4">
                    Need to get in touch? We'd love to hear from you. Here's how
                    you can reach us.
                  </p>
                  <div className="space-y-2">
                    <p>
                      <LocateIcon className="inline-block" /> 10 Baima Road Bo
                    </p>
                    <p>
                      <PhoneIcon className="inline-block" /> +232 78 012 012
                    </p>
                    <p>
                      <MailboxIcon className="inline-block" />{" "}
                      info@thebettsfirm.sl.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-0">*/}
      {/*  <h1 className="text-3xl sm:text-3xl sm:mb-2 md:text-4xl md:mb-4 lg:text-5xl xl:text-6xl font-bold mb-1 p-0">*/}
      {/*    CURRENT PROJECTS FOOD & AGRICULTURE*/}
      {/*  </h1>*/}
      {/*  <p className="max-w-3xl text-md sm:text-md sm:mb-4 md:text- md:mb-6 lg:text-xl xl:text-2xl text-center mb-2 ">*/}
      {/*    Help sponsor our food and agriculture projects to help communities*/}
      {/*    become more self-sufficient and sustainable.*/}
      {/*  </p>*/}
      {/*  <Link to="/donation">*/}
      {/*    <Button size={"lg"} className="bg-white text-primary font-font">*/}
      {/*      <span className="text-lg sm:text-2xl">DONATE TO US</span>*/}
      {/*    </Button>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailboxIcon(props) {
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
