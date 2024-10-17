import { LuHeartHandshake, LuHome, LuLightbulb } from "react-icons/lu";
import { Button } from "flowbite-react";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Volunteer() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Volunteer - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Join us as a volunteer and make a difference."
        />
      </Helmet>
      <Section label="Volunteer" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-left">
              Since MoPADA SL began in 2005, passionate volunteers have been the
              most valuable part of our identity. Volunteers like you play an
              important role in our accomplishments.
            </p>
            <p className="mt-4 text-lg text-left">
              We offer a variety of opportunities ranging from project research
              and planning, fundraising, assisting at special events, garden
              plantings, cleanups, and community outreach.
            </p>
          </div>
          <div className="flex justify-center">
            <LuLightbulb className="h-32 w-32 text-primary" />
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">Volunteer Perks</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <LuHome className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                A Home for New Vancouverites
              </h3>
              <p className="text-left">
                We welcome volunteers from all corners of the globe and are
                proud to have many cultures, traditions and languages
                represented. Volunteers are often new to Vancouver and report
                that MoPADA SL helped them connect with like-minded folks in a
                new city.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <LuHeartHandshake className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Flexible and Supportive
              </h3>
              <p className="text-left">
                Fighting for the safety and security of our planet requires
                flexibility and innovation, and we're proud to support volunteer
                projects and ideas on timelines that work with their busy
                schedules.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Team Meetings
            </h2>
            <p className="mt-4 text-lg text-gray-500 text-left">
              Team meetings are the first step to volunteering with MoPADA SL.
              In our meetings, you will be exposed to the various volunteering
              opportunities and will be able to share your knowledge and skills,
              while connecting with others. Our teams help develop many of
              MoPADA SL's programs and projects and are always looking for
              feedback and fresh ideas. Our teams are mostly volunteer-run and
              occur once a month in the evenings. Meetings are free and open to
              the public, and we always encourage new community members to join.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Meetings are available for the following teams:
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
              <div className="pt-6">
                <div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                        <img
                          alt="Advocacy"
                          className="h-32 w-full object-cover rounded-md"
                          height="128"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "128/128",
                            objectFit: "cover",
                          }}
                          width="128"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Advocacy
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      First Tues of the Month 5:30 - 7:00 pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md shadow-lg">
                        <img
                          alt="Gender"
                          className="h-32 w-full object-cover rounded-md"
                          height="128"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "128/128",
                            objectFit: "cover",
                          }}
                          width="128"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Gender
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Third Wed of the Month 6:00 - 7:30 pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-md shadow-lg">
                        <img
                          alt="Governance"
                          className="h-32 w-full object-cover rounded-md"
                          height="128"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "128/128",
                            objectFit: "cover",
                          }}
                          width="128"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Governance
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Second Wed of the Month 6:30 - 8:00 pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-md shadow-lg">
                        <img
                          alt="Wash"
                          className="h-32 w-full object-cover rounded-md"
                          height="128"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "128/128",
                            objectFit: "cover",
                          }}
                          width="128"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Wash
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Meeting dates vary, please email to join.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="py-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary">
            Current Opportunities
          </h2>
          <div className="mt-6 text-left">
            <div className="max-w-lg w-full text-left">
              <h3 className="text-xl font-bold text-gray-900">
                School Gardens Program Assistant
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                Engage and interact with school age children and youth. Help us
                lead interactive garden/ecological literacy programs, outdoors
                at elementary and secondary schools!
              </p>
              <Link to="/application">
                <Button className="mt-8 w-full" color="blue" variant="default">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
