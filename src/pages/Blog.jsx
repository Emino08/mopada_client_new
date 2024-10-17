import { Button } from "flowbite-react";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Blog - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Learn more about MoPADA-SL and our mission."
        />
      </Helmet>
      <Section label="Blog" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Repair Cafés Helping Individuals to Embrace Circularity
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-1">November 14, 2023</span>
            </div>
            <p className="text-gray-600 mb-4">
              In a world where disposability often reigns, the rise of Repair
              Cafés stands as a beacon of hope for a more sustainable future.
              These community-driven spaces, such as MoPADA SL's Repair Cafés in
              Vancouver, play a vital role in promoting the circular economy –
              an economic model focused on reducing waste and promoting resource
              efficiency.
            </p>
            <Button variant="outline" color="blue">
              Read More
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Vancouver Goes Green</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-1">October 16, 2023</span>
            </div>
            <p className="text-gray-600 mb-4">
              October 16, 2023 Vancouver Landmarks Turning Green for Waste
              Reduction Week Celebrating waste reduction for a brighter future
              The Society Promoting Environmental Conservation (MoPADA SL) is
              proud to announce a captivating initiative in honor of Waste
              Reduction Week. Several iconic landmarks across Vancouver,
              including City Hall, Burrard Bridge, Vancouver Convention Center,
              the Olympic Torch, and BC[...]
            </p>
            <Button variant="outline" color="blue">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
