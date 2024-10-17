import { Button, Checkbox, Select, TextInput } from "flowbite-react";
import Section from "../components/Section";
import React, { useState } from "react";
import GovernanceImage from "../../public/assets/home/Governance & Education.jpg";
import LivelihoodImage from "../../public/assets/home/Livelihood Support.jpg";
import GenderImage from "../../public/assets/home/Gender.jpg";
import AdvocacyImage from "../../public/assets/home/Right Empowerment Training.jpg";
import Health from "../../public/assets/home/Health & Nutrition.jpg";
import AreasOfWorkGridColumn from "../components/AreasOfWorkGridColumn";
import { Helmet } from "react-helmet";

export default function Donation() {
  const [amount, setAmount] = useState("");

  const handleButtonClick = (clickedAmount) => {
    setAmount(clickedAmount);
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
    <div className="mt-28">
      <Helmet>
        <title>
          Donation - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Support our cause by making a donation."
        />
      </Helmet>
      <Section label="Donate" />
      <div className="bg-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <div className="col-span-2 p-8 border rounded-lg">
              <h2 className="text-2xl font-bold mb-6">
                Donate and Make an Impact Today{" "}
                <span aria-hidden="true">🎉</span>
              </h2>
              {/* Donation Frequency */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="frequency"
                >
                  Frequency
                </label>
                <Select id="frequency">
                  <option value="One-Time">One-Time</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </Select>
              </div>

              {/* Donation Amount */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Amount (CAD)
                </label>
                <div className="flex gap-2">
                  <Button onClick={() => handleButtonClick("$55")}>$55</Button>
                  <Button onClick={() => handleButtonClick("$80")}>$80</Button>
                  <Button onClick={() => handleButtonClick("$100")}>
                    $100
                  </Button>
                  <Button onClick={() => handleButtonClick("")}>Other</Button>
                </div>
                <input
                  type="text"
                  className="border border-gray-300 p-2 mt-2 w-full"
                  placeholder="Enter other amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Additional Options */}
              <div className="flex items-center mb-4">
                <Checkbox id="dedicate-gift" />
                <label className="text-sm ml-2" htmlFor="dedicate-gift">
                  I would like to dedicate this gift.
                </label>
              </div>
              <div className="flex items-center mb-4">
                <Checkbox id="processing-fee" />
                <label className="text-sm ml-2" htmlFor="processing-fee">
                  Add $1.65 to help cover the processing fees
                </label>
              </div>

              {/* Personal Details */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Your Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <TextInput placeholder="First Name *" />
                  <TextInput placeholder="Last Name *" />
                </div>
                <TextInput
                  className="mt-4"
                  placeholder="Email Address *"
                  type="email"
                />
              </div>

              {/* Payment */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Payment</h3>
                <TextInput className="mb-4" placeholder="Card number" />
                <TextInput className="mb-4" placeholder="MM / YY  CVC" />
                <button className="w-full bg-primary text-white p-3 rounded-2xl">
                  Donate
                </button>
              </div>

              {/* Bank Transfer Instructions */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  Bank Transfer Details
                </h3>
                <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
                  <p className="mb-2">
                    <strong>Send all inward transfers via SWIFT MT 103:</strong>
                  </p>
                  <ul className="list-disc pl-4">
                    <li>
                      <strong>F56A (Intermediary Institution - FI BIC):</strong>{" "}
                      AFXMEGCA - African Export Import Bank (AFREXIMBANK Egypt)
                    </li>
                    <li>
                      <strong>F57A (Account with Institution - FI BIC):</strong>{" "}
                      ZESLSLFR - Zenith Bank (SL) Ltd, Sierra Leone
                    </li>
                    <li>
                      <strong>SWIFT Code:</strong> ZESLSLFR
                    </li>
                    <li>
                      <strong>IBAN:</strong> EG249004000100300079901200001
                    </li>
                    <li>
                      <strong>F59 (Beneficiary Customer):</strong> Account
                      Number 4070505237 - MoPADA-SL Donations Account
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Giving Options */}
            <div className="p-8 border rounded-lg w-full">
              <h3 className="text-lg font-semibold mb-4">Giving Options</h3>
              <ul className="list-disc pl-4">
                <li className="mb-2">
                  To make a secure online donation with your card, please fill
                  out the form.
                </li>
                <li>
                  To give by cheque, please mail or drop off your donation to
                  MoPADA-SL at 2305 West 7th Ave, Vancouver, BC V6K 1Y4.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Areas of Work Section */}
      <div className="bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 mt-8 mb-6">
            Your generosity will have an impact
          </h1>
          <p className="mb-6">
            Nature needs allies. Your generous gift will help us inspire greener
            ways to move forward.
          </p>
          <AreasOfWorkGridColumn data={areasOfWork} />
        </div>
      </div>
    </div>
  );
}
