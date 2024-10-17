import React, { useState } from "react";
import { Button } from "flowbite-react";
import { GiFreedomDove, GiStairsGoal } from "react-icons/gi";
import {
  FaHandshake,
  FaMinus as MinusIcon,
  FaPlus as PlusIcon,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsHeartPulse } from "react-icons/bs";
import Section from "../components/Section";

import { Link } from "react-router-dom";
import { BiBadgeCheck, BiUser } from "react-icons/bi";
import { Helmet } from "react-helmet";

function About() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  const years = [
    {
      label: "2001 – 2009",
      years: [
        { year: "2001", url: "/2001" },
        { year: "2002", url: "/2002" },
        { year: "2003", url: "/2003" },
        { year: "2004", url: "/2004" },
        { year: "2005", url: "/2005" },
        { year: "2006", url: "/2006" },
        { year: "2007", url: "/2007" },
        { year: "2008", url: "/2008" },
        { year: "2009", url: "/2009" },
        // ... rest of the years
      ],
    },
    {
      label: "2010 – 2015",
      years: [
        { year: "2010", url: "/2010" },
        { year: "2011", url: "/2011" },
        { year: "2012", url: "/2012" },
        { year: "2013", url: "/2013" },
        { year: "2014", url: "/2014" },
        { year: "2015", url: "/2015" },
        // ... rest of the years
      ],
    },
    {
      label: "2016 – 2022",
      years: [
        { year: "2016", url: "/2016" },
        { year: "2017", url: "/2017" },
        { year: "2018", url: "/2018" },
        { year: "2019", url: "/2019" },
        { year: "2020", url: "/2020" },
        { year: "2021", url: "/2021" },
        { year: "2022", url: "/2022" },
        // ... rest of the years
      ],
    },
  ];
  return (
    <div className="bg-[#f0f4f8] mt-28">
      <Helmet>
        <title>
          About - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Learn more about MoPADA-SL and our mission."
        />
      </Helmet>
      <Section label={"About Us"} />

      <div className="py-10 text-left bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 bg-white">
            <div className="shadow-lg shadow-primary rounded-lg p-4">
              <h2 className="text-3xl font-bold text-primary pl-4">Mission</h2>
              <p className="p-4">
                To empower communities to champion their development aspirations
                and constructively challenge unjust structures, systems and
                ensures that women and children fully enjoy their human rights
                whilst living up to their obligations.
              </p>
            </div>
            <div className="shadow-lg shadow-primary p-4 rounded-lg">
              <h2 className="text-3xl font-bold text-primary pl-4">Vision</h2>
              <p className="p-4">
                A transformed Sierra Leonean community in which its inhabitants
                fully enjoy their rights with unhindered access to resources,
                privileges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="bg-[#F0F0F0] py-4">
          <h2 className="text-3xl font-bold mb-6 text-center py-2">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row">
              <BiBadgeCheck className="text-primary mr-4 text-7xl md:text-4xl" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Mutual Respect</h3>
                <p>
                  Requiring us to recognize the innate worth of all people
                  regardless of status and other social factors.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row">
                <BiUser className="text-primary mr-4 text-7xl  md:text-4xl" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Humility</h3>
                  <p>
                    In our presentation and behavior, recognizing that we are
                    part of a wider alliance against poverty and
                    underdevelopment – in all their forms.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row">
                <GiStairsGoal className="text-primary mr-6 text-7xl md:text-4xl" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Courage & Conviction
                  </h3>
                  <p>
                    Requiring us to be creative constructively radical, bold and
                    innovative – without fear of failure – in pursuit of making
                    the greatest possible impact on causes of poverty and
                    underdevelopment
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row">
                <FaPeopleGroup className="text-primary mr-6 text-7xl md:text-4xl" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Equality & Justice
                  </h3>
                  <p>
                    Requiring us to work to ensure equal opportunity and
                    privileges for all irrespective of race, age, gender, sexual
                    orientation, HIV status, colours, class, ethnicity,
                    disability, location and religion
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row">
                <BsHeartPulse className="text-primary mr-6 text-7xl md:text-4xl" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Honesty & Transparency
                  </h3>
                  <p>
                    We are committed to being accountable to both our service
                    users and partners at all levels for the effectiveness of
                    our actions and open in our judgements and communications
                    with others.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row">
                <FaHandshake className="text-primary mr-6 text-7xl md:text-4xl" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Solidarity</h3>
                  <p>
                    With the poor, powerless and marginalized will be the only
                    bias in our commitments to ensuring the realization of our
                    Vision, Mission and objectives.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row">
                <GiFreedomDove className="text-primary mr-4 text-7xl md:text-lg" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Independence</h3>
                  <p>From any religious or party political affiliation</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="py-10 text-left bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Strategic Plan</h2>
          <p className="mb-4">
            MoPADA SL's Strategic Plan 2018-2023 sets out a vision for MoPADA
            SL's next five years and identifies actions needed to turn that
            vision into reality. The Strategic Plan is both a map and a compass,
            guiding MoPADA SL's priorities and allocation of resources. It is a
            "living document"; the MoPADA SL Board will re-visit the plan
            annually and adjust as needed.
          </p>
          <Button className="bg-primary hover:bg-green-600 text-white">
            View Strategic Plan
          </Button>
        </div>
      </div>

      <div className="py-10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Annual Reports
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500">
            Annual reports are published at the end of each fiscal year which
            runs from September 1st to August 31st. Below are copies of past
            reports.
          </p>

          <div className="mt-8 flex space-x-4">
            {years.map((yearGroup, index) => (
              <div key={index}>
                <Button
                  className="bg-primary text-white flex items-center"
                  variant="default"
                  onClick={() => handleYearClick(yearGroup.label)}
                >
                  {selectedYear === yearGroup.label ? (
                    <MinusIcon className="mr-2" />
                  ) : (
                    <PlusIcon className="mr-2" />
                  )}
                  {yearGroup.label}
                </Button>
                {selectedYear === yearGroup.label && (
                  <ul className="mt-4 list-disc pl-5 space-y-1">
                    {yearGroup.years.map(({ year, url }) => (
                      <li key={year} className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 text-primary dark:text-green-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <Link className="text-primary" to={url}>
                          {year}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
