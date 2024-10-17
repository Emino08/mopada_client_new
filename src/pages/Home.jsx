import { Link } from "react-router-dom";
import { Button, Carousel } from "flowbite-react";
import Map from "../components/Map";
import YouTube from "react-youtube";

import React from "react";
import AreasOfWorkGridColumn from "../components/AreasOfWorkGridColumn";

import GovernanceImage from "/assets/home/Governance & Education.jpg";
import LivelihoodImage from "/assets/home/Livelihood Support.jpg";
import AdvocacyImage from "/assets/home/Right Empowerment Training.jpg";
import GenderImage from "/assets/home/Gender.jpg";
import Health from "/assets/home/Health & Nutrition.jpg";

import HeaderImage from "/assets/header.jpeg";
import { Helmet } from "react-helmet";

export default function Component() {
  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //     // access to player in all event handlers via event.target
  //     event.target.playVideo();
  // }
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  const ops = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const areasOfWork = [
    {
      title: "Governance & Education",
      imgSrc: GovernanceImage,
      description:
        "Promoting the use of renewable energy and sustainable transportation.",
      url: "/governance-education",
    },
    {
      title: "Livelihood & Support",
      imgSrc: LivelihoodImage,
      description:
        "Providing support to vulnerable groups to improve their livelihoods.",
      url: "/livelihood-support",
    },
    {
      title: "Gender",
      imgSrc: GenderImage,
      description:
        "Provider support to female and ensure their rights are protected.",
      url: "/gender",
    },
    {
      title: "Advocacy",
      imgSrc: AdvocacyImage,
      description:
        "Advocating for the rights of the vulnerable and marginalized groups.",
      url: "/advocacy",
    },
    {
      title: "WASH/ Health & Nutrition",
      imgSrc: Health,
      description:
        "Promoting good health and nutrition practices and access to clean water and sanitation facilities.",
      url: "/wash-health-nutrition",
    },
  ];

  return (
    <div className=" mt-28">
      <Helmet>
        <title>
          Home - Movement towards Peace And Development Agency (MoPADA-Sierra
          Leone)
        </title>
        <meta
          name="description"
          content="Welcome to MoPADA-SL. We promote educational and advocacy initiatives in five key areas."
        />
      </Helmet>
      <Carousel
        slideInterval={5000}
        leftControl=" "
        rightControl=" "
        indicators={false}
        pauseOnHover
        className="cursor-text"
      >
        <section className="relative bg-[#0c4a6e] text-white">
          {/*<img*/}
          {/*  alt="Team"*/}
          {/*  className="w-full h-[700px] object-cover"*/}
          {/*  src={HeaderImage}*/}
          {/*/>*/}
          <div className="brightness-50">
            <img
              alt="Team"
              className="w-full h-[700px] object-cover"
              src={HeaderImage}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-0">
            <h1 className="text-3xl sm:text-3xl sm:mb-2 md:text-4xl md:mb-4 lg:text-5xl xl:text-6xl font-bold mb-1 p-0">
              CURRENT PROJECTS FOOD & AGRICULTURE
            </h1>
            <p className="max-w-3xl text-md sm:text-md sm:mb-4 md:text- md:mb-6 lg:text-xl xl:text-2xl text-center mb-2 ">
              Help sponsor our food and agriculture projects to help communities
              become more self-sufficient and sustainable.
            </p>
            <Link to="/donation">
              <Button size={"lg"} className="bg-white text-primary font-font">
                <span className="text-lg sm:text-2xl">DONATE TO US</span>
              </Button>
            </Link>
          </div>
        </section>
        <section className="relative bg-[#0c4a6e] text-white">
          <div className="brightness-50">
            <img
              alt="Team"
              className="w-full h-[700px] object-cover"
              src={HeaderImage}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl sm:text-3xl sm:mb-2 md:text-4xl md:mb-4 lg:text-5xl xl:text-6xl font-bold mb-1">
              CURRENT PROJECTS FEEDING PROGRAM
            </h1>
            <p className="max-w-3xl text-md sm:text-md sm:mb-4 md:text- md:mb-6 lg:text-xl xl:text-2xl text-center mb-2">
              Help sponsor our food and agriculture projects to help communities
              become more self-sufficient and sustainable.
            </p>
            <Button size={"lg"} className="bg-white text-primary font-font">
              <span className="text-2xl">DONATE TO US</span>
            </Button>
          </div>
        </section>
        <section className="relative bg-[#0c4a6e] text-white">
          <div className="brightness-50">
            <img
              alt="Team"
              className="w-full h-[700px] object-cover"
              src={HeaderImage}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl sm:text-3xl sm:mb-2 md:text-4xl md:mb-4 lg:text-5xl xl:text-6xl font-bold mb-1">
              CURRENT PROJECTS FOOD & AGRICULTURE
            </h1>
            <p className="max-w-3xl text-md sm:text-md sm:mb-4 md:text- md:mb-6 lg:text-xl xl:text-2xl text-center mb-2">
              Help sponsor our food and agriculture projects to help communities
              become more self-sufficient and sustainable.
            </p>
            <Button size={"lg"} className="bg-white text-primary font-font">
              <span className="text-2xl">ABOUT MOPADA SL</span>
            </Button>
          </div>
        </section>
      </Carousel>
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-lg shadow-primary">
            <img
              alt="Children's drawings"
              className="w-full"
              height="400"
              src={HeaderImage}
            />
            <div className="h-full pl-4 pb-4">
              <h2 className="text-lg font-bold text-gray-500 sm:text-xl text-left">
                OUR VISION
              </h2>
              <p className="mt-4 text-2xl font-bold text-black text-left">
                A transformed Sierra Leonean community in which its inhabitants
                fully enjoy their rights with unhindered access to resources,
                privileges and opportunities.
              </p>
              <p className="mt-4 text-base text-gray-500 text-left">
                Movement towards Peace and Development Agency (MoPADA-SL) is a
                non-profit making National Non-Governmental humanitarian
                organization that has existed over fourteen years with their
                headquarters in Bo District, Sierra Leone.
              </p>
              <Link to="about-us">
                <Button className="mt-8 bg-primary text-white">
                  ABOUT MoPADA SL
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Our Areas of Work
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            MoPADA SL promotes educational and advocacy initiatives in five key
            areas.
          </p>

          <AreasOfWorkGridColumn data={areasOfWork} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">
          We need your help.
        </h1>
        <p className="text-center mb-8">
          Sign up for our newsletter or donate to SPEC and help us share urgent
          education to build a sustainable and resilient future.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/news-letter">
            <Button className="border-primary text-primary">NEWSLETTER</Button>
          </Link>

          <Link to="/donation">
            <Button className="bg-primary text-white">DONATE</Button>
          </Link>
        </div>
        <div className="mt-8 h-[500px]">
          <h1 className="text-5xl font-bold text-center mb-4 text-primary p-4">
            Follow with us Live on Youtube
          </h1>
          <YouTube
            videoId="g--lnaH9F6Q"
            className=" max-w-7xl mx-auto min-w-full h-full"
            opts={ops}
            onReady={onPlayerReady}
          />
        </div>
      </div>

      <div className="bg-[#f0f4f8] mb-8 mt-14">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto shadow-2xl shadow-primary">
          <div className="w-full md:w-2/3">
            <Map />
          </div>
          <div className="w-full md:w-1/3 bg-[#f5f7fa] p-10 mt-6 md:mt-0 text-left">
            <h2 className="text-5xl font-bold mb-4 text-primary">Contact Us</h2>
            <p className="text-xl mb-8 font-bold text-primary">
              We'd love to hear from you
            </p>
            <p className="mb-4">
              Need to get in touch? We’d love to hear from you. Here’s how you
              can reach us.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <LocateIcon className="text-blue-600 h-6 w-6" />
                <span>
                  10 Brima Lane, Off Bo Kenema Highway Kennedy Section
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="text-blue-600 h-6 w-6" />
                <span>+232 78 822263 / +232 78287283 / +232 76 722594</span>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="text-blue-600 h-6 w-6" />
                <span>info@mopadasl.org</span>
              </div>
            </div>
            <Link to="/contact-us">
              <Button className="mt-10 bg-primary text-white">
                Let's get in touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
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

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
