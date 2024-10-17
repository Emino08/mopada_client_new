import React from "react";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

const JobOpening = ({ title, details }) => (
  <div className="mb-8 p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
    {Object.entries(details).map(([key, value]) => (
      <div key={key} className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">{key}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    ))}
  </div>
);

export default function JobOpportunities() {
  const jobDetails = {
    Organization:
      "Movement towards Peace and Development Agency- Sierra Leone (MoPADA-SL)",
    Position: "Health Assistant (02)",
    Project:
      "Enhancing health outcomes for vulnerable and marginalized women, adolescent girls and children in Kailahun District",
    Location: "Kailahun",
    "Contract Duration": "12 Months",
    "Closing Date": "25th October 2024",
  };

  const responsibilities = [
    "Liaison and interpreter between German Mission Doctors, community clients, and PHU staff",
    "Ensure smooth and safe working environment for German Mission Doctors",
    "Support health referrals and communicate monthly clinic schedules",
    "Document and share project activity reports",
    "Support technical trainings and mentorship to health care providers",
    "Coordinate integrated outreaches with mission doctors",
    "Maintain confidentiality of clients and professional communication",
    "Participate in project meetings and planning activities",
    "Dispense drugs and manage drug records at health facilities",
  ];

  const qualifications = [
    "Professional qualification in relevant subject (SECHN/SRN/Public Health or related)",
    "1 year experience in similar capacity",
    "Clinical skills and experience",
    "Leadership and organizational skills",
    "Ability to work under pressure and attention to detail",
    "Excellent written and verbal communication skills",
    "Ability to speak local languages, especially Mende",
    "Willingness to commit to MoPADA-SL's aims, values, and principles",
  ];

  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Job Opportunities - Movement towards Peace And Development Agency
          (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Check out the current job opportunities at MoPADA-SL."
        />
      </Helmet>
      <Section label="Job Opportunities" />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Current Opportunities
        </h1>

        <JobOpening title="Health Assistant" details={jobDetails} />

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Key Responsibilities
          </h3>
          <ul className="list-disc pl-6">
            {responsibilities.map((resp, index) => (
              <li key={index} className="text-gray-600 mb-2">
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Qualifications
          </h3>
          <ul className="list-disc pl-6">
            {qualifications.map((qual, index) => (
              <li key={index} className="text-gray-600 mb-2">
                {qual}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-4">
            How to Apply
          </h3>
          <p className="text-gray-600 mb-2">Submit your application to:</p>
          <p className="text-gray-600 mb-2">The Admin/Human Resource Manager</p>
          <p className="text-gray-600 mb-2">MoPADA-SL's Head Office</p>
          <p className="text-gray-600 mb-2">
            10 Brima Lane, Off Bo Kenema Highway- Kennedy Section- Bo City
          </p>
          <p className="text-gray-600 mb-2">OR</p>
          <p className="text-gray-600 mb-2">
            49 Mofindor Road, Panguma Section, Kailahun Town
          </p>
          <p className="text-gray-600 mb-2">Online: mopadasl2006@gmail.com</p>
        </div>

        <p className="mt-8 text-sm text-gray-600">
          MoPADA-SL is an Equal Opportunity Employer. Women and physically
          challenged individuals are strongly encouraged to apply. This is a
          National Position, and Sierra Leonean employee terms and conditions
          will apply.
        </p>
      </div>
    </div>
  );
}
