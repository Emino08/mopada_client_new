// import Section from "../components/Section";
// import React, { useState } from "react";
//
// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({
//     // Personal Information
//     fullName: "",
//     phoneNumber: "",
//     emailAddress: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     zipCode: "",
//
//     // Professional Information
//     resume: null, // File input for Resume/CV Upload
//     coverLetter: "", // Optional textarea for Cover Letter
//     linkedInProfile: "", // Optional input for LinkedIn Profile
//     portfolio: "", // Optional input for Portfolio or Work Samples
//
//     // Job-Specific Information
//     positionAppliedFor: "",
//     jobReferenceNumber: "",
//     desiredSalary: "",
//     employmentType: "",
//
//     // Education
//     highestEducation: "",
//     institutionName: "",
//     fieldOfStudy: "",
//     graduationDate: "",
//
//     // Work Experience
//     previousEmployment: [
//       {
//         companyName: "",
//         jobTitle: "",
//         employmentStartDate: "",
//         employmentEndDate: "",
//         responsibilities: "",
//         achievements: "",
//       },
//     ],
//
//     // Skills and Qualifications
//     technicalSkills: "",
//     softSkills: "",
//     certifications: "",
//
//     // Availability
//     startDate: "",
//     preferredWorkSchedule: "",
//     willingnessToRelocate: false,
//
//     // References
//     professionalReferences: [
//       {
//         name: "",
//         title: "",
//         contactInformation: "",
//       },
//     ],
//
//     // Diversity and Equal Opportunity Information
//     gender: "",
//     raceEthnicity: "",
//     veteranStatus: "",
//     disabilityStatus: "",
//
//     // Additional Questions
//     whyInterested: "",
//     howDidYouHear: "",
//     eligibleToWork: false,
//     convictedOfCrime: false,
//   });
//
//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : files ? files[0] : value,
//     }));
//   };
//
//   const handleAddReference = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       professionalReferences: [
//         ...prevData.professionalReferences,
//         { name: "", title: "", contactInformation: "" },
//       ],
//     }));
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log(formData);
//   };
//
//   return (
//     <div className="mt-28">
//       <Section label="Application Form" />
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-left">
//         <form onSubmit={handleSubmit}>
//           {/* Personal Information */}
//           <h2>Personal Information</h2>
//           {/* ... Personal Information fields ... */}
//
//           {/* Professional Information */}
//           <h2>Professional Information</h2>
//           {/* ... Professional Information fields ... */}
//
//           {/* Job-Specific Information */}
//           <h2>Job-Specific Information</h2>
//           {/* ... Job-Specific Information fields ... */}
//
//           {/* Education */}
//           <h2>Education</h2>
//           {/* ... Education fields ... */}
//
//           {/* Work Experience */}
//           <h2>Work Experience</h2>
//           {/* ... Work Experience fields ... */}
//
//           {/* Skills and Qualifications */}
//           <h2>Skills and Qualifications</h2>
//           {/* ... Skills and Qualifications fields ... */}
//
//           {/* Availability */}
//           <h2>Availability</h2>
//           {/* ... Availability fields ... */}
//
//           {/* References */}
//           <h2>References</h2>
//           {/* ... References fields ... */}
//           {formData.professionalReferences.map((reference, index) => (
//             <div key={index}>{/* Reference fields */}</div>
//           ))}
//           <button type="button" onClick={handleAddReference}>
//             Add Reference
//           </button>
//
//           {/* Diversity and Equal Opportunity Information */}
//           <h2>Diversity and Equal Opportunity Information</h2>
//           {/* ... Diversity and Equal Opportunity Information fields ... */}
//
//           {/* Additional Questions */}
//           <h2>Additional Questions</h2>
//           {/* ... Additional Questions fields ... */}
//
//           {/* Submit Button */}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Application Form mt-28">
      <Helmet>
        <title>
          Application Form - Movement towards Peace And Development Agency
          (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Fill out our application form to join our team and make a difference."
        />
      </Helmet>
      <Section label="Application Form" />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-left">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold mb-6 text-center py-2">
            Job Application Form
          </h2>

          <h3 className="text-2xl font-bold mb-4">Personal Information:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                {...register("fullName", { required: true })}
                type="text"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
              />
              {errors.fullName && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                {...register("phoneNumber", { required: true })}
                type="tel"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                required
              />
              {errors.phoneNumber && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="street"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Street
              </label>
              <input
                {...register("street", { required: true })}
                type="text"
                id="street"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Street"
                required
              />
              {errors.street && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                {...register("city", { required: true })}
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="City"
                required
              />
              {errors.city && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="state"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                State
              </label>
              <input
                {...register("state", { required: true })}
                type="text"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="State"
                required
              />
              {errors.state && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="zipCode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ZIP Code
              </label>
              <input
                {...register("zipCode", { required: true })}
                type="text"
                id="zipCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ZIP Code"
                required
              />
              {errors.zipCode && <span>This field is required</span>}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Professional Information:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="resume"
              >
                Upload Resume/CV
              </label>
              <input
                {...register("resume", { required: true })}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="resume"
                type="file"
                required
              />
              {errors.resume && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="coverLetter"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cover Letter
              </label>
              <textarea
                {...register("coverLetter")}
                id="coverLetter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cover Letter"
              />
            </div>
            <div>
              <label
                for="linkedInProfile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                LinkedIn Profile
              </label>
              <input
                {...register("linkedInProfile")}
                type="url"
                id="linkedInProfile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="LinkedIn Profile"
              />
            </div>
            <div>
              <label
                for="portfolio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Portfolio or Work Samples
              </label>
              <input
                {...register("portfolio")}
                type="url"
                id="portfolio"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Portfolio or Work Samples"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Job-Specific Information:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="positionAppliedFor"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position Applied For
              </label>
              <input
                {...register("positionAppliedFor", { required: true })}
                type="text"
                id="positionAppliedFor"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Position Applied For"
                required
              />
              {errors.positionAppliedFor && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="jobReferenceNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Reference Number
              </label>
              <input
                {...register("jobReferenceNumber", { required: true })}
                type="text"
                id="jobReferenceNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Job Reference Number"
                required
              />
              {errors.jobReferenceNumber && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="desiredSalary"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Desired Salary
              </label>
              <input
                {...register("desiredSalary", { required: true })}
                type="text"
                id="desiredSalary"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Desired Salary"
                required
              />
              {errors.desiredSalary && <span>This field is required</span>}
            </div>

            <div>
              <label
                for="employmentType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Employment Type
              </label>
              <select
                {...register("employmentType", { required: true })}
                id="employmentType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Temporary">Temporary</option>
              </select>
              {errors.employmentType && <span>This field is required</span>}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Education:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="highestEducation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Highest Education
              </label>
              <select
                {...register("highestEducation", { required: true })}
                id="highestEducation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="High School Diploma">High School Diploma</option>
                <option value="Associate's Degree">Associate's Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Doctorate">Doctorate</option>
                <option value="Other">Other</option>
              </select>
              {errors.highestEducation && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="institutionName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Institution Name
              </label>
              <input
                {...register("institutionName", { required: true })}
                type="text"
                id="institutionName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Institution Name"
                required
              />
              {errors.institutionName && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="fieldOfStudy"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Field of Study
              </label>
              <input
                {...register("fieldOfStudy", { required: true })}
                type="text"
                id="fieldOfStudy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-
                500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Field of Study"
                required
              />
              {errors.fieldOfStudy && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="graduationDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Graduation Date
              </label>
              <input
                {...register("graduationDate", { required: true })}
                type="date"
                id="graduationDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {errors.graduationDate && <span>This field is required</span>}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Work Experience:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="companyName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                {...register("companyName", { required: true })}
                type="text"
                id="companyName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company Name"
                required
              />
              {errors.companyName && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="jobTitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Title
              </label>
              <input
                {...register("jobTitle", { required: true })}
                type="text"
                id="jobTitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Job Title"
                required
              />
              {errors.jobTitle && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="employmentStartDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Employment Start Date
              </label>
              <input
                {...register("employmentStartDate", { required: true })}
                type="date"
                id="employmentStartDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {errors.employmentStartDate && (
                <span>This field is required</span>
              )}
            </div>
            <div>
              <label
                for="employmentEndDate"
                className="
                block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Employment End Date
              </label>
              <input
                {...register("employmentEndDate", { required: true })}
                type="date"
                id="employmentEndDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-
                500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                500"
                required
              />
              {errors.employmentEndDate && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="responsibilities"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Responsibilities
              </label>
              <textarea
                {...register("responsibilities")}
                id="responsibilities"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                    500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                    500"
                placeholder="Responsibilities"
              />
            </div>
            <div>
              <label
                for="achievements"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Achievements
              </label>
              <textarea
                {...register("achievements")}
                id="achievements"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                    500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                    500"
                placeholder="Achievements"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Skills and Qualifications:
          </h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="technicalSkills"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technical Skills
              </label>
              <textarea
                {...register("technicalSkills")}
                id="technicalSkills"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                500"
                placeholder="Technical Skills"
              />
            </div>
            <div>
              <label
                for="softSkills"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Soft Skills
              </label>
              <textarea
                {...register("softSkills")}
                id="softSkills"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                500"
                placeholder="Soft Skills"
              />
            </div>
            <div>
              <label
                for="certifications"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Certifications
              </label>
              <textarea
                {...register("certifications")}
                id="certifications"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                500"
                placeholder="Certifications"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Availability:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="startDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Start Date
              </label>
              <input
                {...register("startDate", { required: true })}
                type="date"
                id="startDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                500"
                required
              />
              {errors.startDate && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="preferredWorkSchedule"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Preferred Work Schedule
              </label>
              <input
                {...register("preferredWorkSchedule", { required: true })}
                type="text"
                id="preferredWorkSchedule"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                500"
                placeholder="Preferred Work Schedule"
                required
              />
              {errors.preferredWorkSchedule && (
                <span>This field is required</span>
              )}
            </div>
            <div>
              <label
                for="willingnessToRelocate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Willingness to Relocate
              </label>
              <input
                {...register("willingnessToRelocate")}
                type="checkbox"
                id="willingnessToRelocate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-
                500"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">References:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-
                500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-
                blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                required
              />
              {errors.title && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="contactInformation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Information
              </label>
              <input
                {...register("contactInformation", { required: true })}
                type="text"
                id="contactInformation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-
                500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-
                blue-500 dark:focus:border-blue-500"
                placeholder="Contact Information"
                required
              />
              {errors.contactInformation && <span>This field is required</span>}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Diversity and Equal Opportunity Information:
          </h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <input
                {...register("gender", { required: true })}
                type="text"
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Gender"
                required
              />
              {errors.gender && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="raceEthnicity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Race/Ethnicity
              </label>
              <input
                {...register("raceEthnicity", { required: true })}
                type="text"
                id="raceEthnicity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Race/Ethnicity"
                required
              />
              {errors.raceEthnicity && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="veteranStatus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Veteran Status
              </label>
              <input
                {...register("veteranStatus", { required: true })}
                type="text"
                id="veteranStatus"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Veteran Status"
                required
              />
              {errors.veteranStatus && <span>This field is required</span>}
            </div>
            <div>
              <label
                for="disabilityStatus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Disability Status
              </label>
              <input
                {...register("disabilityStatus", { required: true })}
                type="text"
                id="disabilityStatus"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Disability Status"
                required
              />
              {errors.disabilityStatus && <span>This field is required</span>}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Additional Questions:</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="whyInterested"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Why are you interested in this position?
              </label>
              <textarea
                {...register("whyInterested")}
                id="whyInterested"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Why are you interested in this position?"
              />
            </div>
            <div>
              <label
                for="howDidYouHear"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                How did you hear about the job opening?
              </label>
              <textarea
                {...register("howDidYouHear")}
                id="howDidYouHear"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="How did you hear about the job opening?"
              />
            </div>
            <div>
              <label
                for="eligibleToWork"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Are you legally eligible to work in the country?
              </label>
              <input
                {...register("eligibleToWork")}
                type="checkbox"
                id="eligibleToWork"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="convictedOfCrime"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Have you ever been convicted of a crime?
              </label>
              <input
                {...register("convictedOfCrime")}
                type="checkbox"
                id="convictedOfCrime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary bg-primary text-2xl p-4 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
