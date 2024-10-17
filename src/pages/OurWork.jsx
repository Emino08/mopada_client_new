import { Avatar, Button, Card } from "flowbite-react";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function OurWork() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Our Work - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Discover the work we do at MoPADA-SL and how we strive for peace and development."
        />
      </Helmet>
      <Section label="Our Work" />

      <div className="bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-5xl font-bold text-gray-900">
                Energy & Transportation Team
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                The health of our planet depends on reducing our energy
                consumption and shifting to sustainable and renewable energy
                sources.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                SPEC’s Energy & Transportation Team works to educate
                individuals, businesses, communities, and children about
                renewable energy, energy conservation and sustainable modes of
                transportation.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We also advocate at a municipal and provincial level for energy
                and transportation policies that move us toward energy
                conservation, responsible energy production and a healthy and
                just urban environment.
              </p>
            </div>
            <div className="bg-[#004445] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold">Meetings</h2>
              <p className="mt-4">
                Monthly meetings are free and open to the public. We discuss
                current projects, upcoming events, and share new ideas.
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Third Wednesday of the Month</li>
                <li>6:00–7:30pm</li>
                <li>Virtual via Google Meet</li>
              </ul>
              <Button className="mt-6 bg-[#22b8cf] hover:bg-[#1e9ea8] text-white">
                UPCOMING MEETINGS
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Current Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="w-full">
            <img
              alt="tREX: The Renewable Energy eXperience"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div>
              <h3 className="text-xl font-semibold">
                tREX: The Renewable Energy eXperience
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Walking tours around Olympic Village to explore sustainable
                energy technology.
              </p>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
          <Card className="w-full">
            <img
              alt="RED: Renewable Energy Demonstration"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div>
              <h3 className="text-xl font-semibold">
                RED: Renewable Energy Demonstration
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Display at Riley Park Community Garden used for educational
                programs for kids.
              </p>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
          <Card className="w-full">
            <img
              alt="CAWS: Climate Action Workshop Series"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div>
              <h3 className="text-xl font-semibold">
                CAWS: Climate Action Workshop Series
              </h3>
              <p className="mt-2 text-base text-gray-500">
                A series of free workshops to help school aged children in
                grades 3-9 learn and explore climate change.
              </p>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
          <Card className="w-full">
            <img
              alt="Carbon Offsets"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div>
              <h3 className="text-xl font-semibold">Carbon Offsets</h3>
              <p className="mt-2 text-base text-gray-500">
                Research project conducted by UBC Students in SCIE420. Learn
                about carbon offsetting.
              </p>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
          <Card className="w-full">
            <img
              alt="Go Solar Tours"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div>
              <h3 className="text-xl font-semibold">Go Solar Tours</h3>
              <p className="mt-2 text-base text-gray-500">
                Tours to visit the new location of SPEC's solar panels,
                previously at MEC.
              </p>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-8 space-y-12">
        <section>
          <h2 className="text-3xl font-bold">Past Projects</h2>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-4 bg-white shadow">
              <h3 className="text-lg font-medium">Right to Dry</h3>
              <PlusIcon className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between p-4 bg-white shadow">
              <h3 className="text-lg font-medium">Zero Fossil Fuels</h3>
              <PlusIcon className="h-6 w-6" />
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-center">
            Meet the Team Leads
          </h2>
          <div className="mt-8 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Chris Gooderham</h3>
            <p className="text-sm">Chair, SPEC Board Member</p>
            <div className="mt-4">
              <Avatar>
                <img
                  alt="Chris Gooderham"
                  src="/placeholder.svg?height=100&width=100"
                />
                <p>CG</p>
              </Avatar>
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold">
                Passionate about Energy & Transportation?
              </h4>
              <p className="mt-2">
                Help us continue to educate the public on climate change and
                renewable energy solutions.
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <Button variant="outline">Volunteer</Button>
              <Button>Donate</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
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
