import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function OurHistory() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Our History - Movement towards Peace And Development Agency
          (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Learn about the history of MoPADA-SL and our journey towards peace and development."
        />
      </Helmet>
      <Section label="Our History" />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="text-4xl font-bold text-gray-900">
          Fostering urban sustainability since 1969
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          For over 50 years MoPADA SL has brought a range of environmental
          concerns to the attention of policymakers, industry and the public.
          Through its public education and advocacy work, MoPADA SL has built a
          lasting legacy of environmental protection. Some of our most important
          achievements include:
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 text-sm">
          <ul className="list-disc pl-5 space-y-2 text-left">
            <li>
              Advocating a moratorium on offshore oil exploration and
              transportation
            </li>
            <li>
              Advocating rapid transit such as the Sea-Bus across Burrard Inlet
            </li>
            <li>Founding the Recycle Council of BC (RCBC)</li>
            <li>Reducing the use of hazardous pesticides</li>
            <li>
              Lobbying for a provincial Land Commission Act to preserve BC
              farmland
            </li>
            <li>
              Pushing for the Berger Inquiry into the Mackenzie Valley natural
              gas pipeline
            </li>
            <li>
              Being a founding member of Canadian Coalition for Nuclear
              Responsibility
            </li>
          </ul>
          <ul className="list-disc pl-5 space-y-2 text-left">
            <li>Opposing BC Hydro’s Site C dam in Northern BC</li>
            <li>
              Helping found the West Coast Environmental Law Association (WCELA)
            </li>
            <li>
              Helping stop the proposed Vancouver Island nuclear power plants
            </li>
            <li>Helping eliminate the use of DDT</li>
            <li>Establishing the first recycling depots in BC</li>
            <li>
              Playing a key role in preventing the privatization of the GVRD’s
              water filtration plant
            </li>
            <li>Working to stop the SE2 power plant</li>
            <li>
              Promoting municipal by-laws to limit non-essential pesticide use
            </li>
          </ul>
        </div>
      </div>

      <div className=" bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 text-left">
              <h1 className="text-4xl font-bold">MoPADA SL's Locations</h1>
              <p className="mt-4 text-sm">
                Throughout the years, MoPADA SL has called many places home.
                Here’s a snapshot of all our physical locations since 1969.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>
                  1969: MoPADA SL opens an office and information centre at 4857
                  Kingsway in Burnaby
                </li>
                <li>
                  1972: MoPADA SL moves to 1095 West 7th Ave in Fairview Slopes
                </li>
                <li>1973: MoPADA SL moves to 2007 West 4th Ave</li>
                <li>
                  1976: MoPADA SL moves to 1603 West 4th Ave, under Granville
                  Bridge
                </li>
                <li>1979: MoPADA SL moves to 3253 Heather St.</li>
                <li>1980: MoPADA SL moves to 2150 Maple St.</li>
                <li>2011: MoPADA SL moves to 2060 Pine St.</li>
                <li>2014: MoPADA SL moves to 2305 West 7th Ave</li>
              </ul>
            </div>
            <div>
              <img
                alt="MoPADA SL's previous building on Maple Street"
                className="mb-4"
                height="200"
                src="https://spec.bc.ca/wp-content/uploads/2021/08/building-compressed.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="MoPADA SL's previous building on Maple Street"
                height="200"
                src="https://spec.bc.ca/wp-content/uploads/2021/08/building-compressed.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <p className="mt-2 text-sm text-center">
                Images of MoPADA SL's previous building on Maple Street
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
