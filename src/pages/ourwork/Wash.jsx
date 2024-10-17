import Section from "../../components/Section";
import GovernanceImage from "/assets/home/Governance & Education.jpg";
import LivelihoodImage from "/assets/home/Livelihood Support.jpg";
import GenderImage from "/assets/home/Gender.jpg";
import AdvocacyImage from "/assets/home/Right Empowerment Training.jpg";
import Health from "/assets/home/Health & Nutrition.jpg";
import AreasOfWorkGridColumn from "../../components/AreasOfWorkGridColumn";
import React from "react";

export default function Wash() {
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
    <div className="mt-28">
      <Section label="WASH and Health Nutrition" />
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">
              The health of our planet depends on reducing our energy
              consumption and shifting to sustainable and renewable energy
              sources.
            </h2>
            <p className="mt-4 text-base">
              MoPADA SL's Energy & Transportation Team works to educate
              individuals, businesses, communities, and children about renewable
              energy, energy conservation and sustainable modes of
              transportation.
            </p>
            <p className="mt-4 text-base">
              We also advocate at a municipal and provincial level for energy
              and transportation policies that move us toward energy
              conservation, responsible energy production and a healthy and just
              urban environment.
            </p>
          </div>
          <div className="bg-primary p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold">Meetings</h3>
            <p className="mt-2 text-sm">
              Monthly meetings are free and open to the public. We discuss
              current projects, upcoming events, and share new ideas.
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              <li>Third Wednesday of the Month</li>
              <li>6:00-7:30pm</li>
              <li>Virtual via Google Meet</li>
            </ul>
            <button className="mt-4 bg-white text-primary rounded-2xl p-2">
              Upcoming Meetings
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f0f4f8]">
        <div className="mt-8  max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-left p-4">
            Current Projects
          </h1>
          <AreasOfWorkGridColumn data={areasOfWork} />
        </div>
      </div>
    </div>
  );
}
