import PatrickMomoh from "/assets/staffs/PatrickMomoh.png";
import JenebaGraceSalia from "/assets/staffs/Jeneba-G.-Salia-246x300.png Admin Human Resource Manager.png";
import JabezKAmadu from "/assets/staffs/Jabez-K.-Amadu--261x300.png Governance Programme Manager.png";
import RaphCLJones from "/assets/staffs/Raph-C.-L.-Jones-300x277.png Advocacy && Communication Coordinator.png";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function OurTeam() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Our Team - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Meet the dedicated team behind MoPADA-SL."
        />
      </Helmet>
      <Section label="Our Team" />

      <div className="max-w-4xl mx-auto my-12 px-6 text-left">
        <h1 className="text-4xl font-bold mb-6">MoPADA SL Staff</h1>
        <hr className="border-t-2 border-gray-200 mb-6" />
        <div className="space-y-12">
          <div className="flex gap-6">
            <img
              alt="Patrick Momoh"
              className="flex-none w-40 h-52 object-cover"
              height="200"
              src={PatrickMomoh}
              style={{
                aspectRatio: "160/200",
                objectFit: "cover",
              }}
              width="160"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Patrick Momoh</h2>
              <p className="text-lg font-medium text-gray-600 mb-4">
                Executive Director
              </p>
              <p className="text-gray-700">
                {/*Give a brief description of the person here in the given role.(Executive Director Position)*/}
                Patrick is a Sierra Leonean with over 15 years of experience in
                the development sector. He has worked with various international
                and national organizations in different capacities. He has
                experience in project management, monitoring and evaluation,
                research, and advocacy. He holds a Bachelor of Science degree in
                Economics and a Master of Science degree in Development Studies
                from Njala University. He is currently pursuing a Master of
                Business Administration (MBA) degree at the Institute of Public
                Administration and Management (IPAM) at the University of Sierra
                Leone. Patrick is a member of the Sierra Leone Association of
                Non-Governmental Organizations (SLANGO) and the Sierra Leone
                Economics Association (SLEA).
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-200" />
          <div className="flex gap-6">
            <img
              alt="Jeneba Grace Salia"
              className="flex-none w-40 h-52 object-cover"
              height="200"
              src={JenebaGraceSalia}
              style={{
                aspectRatio: "160/200",
                objectFit: "cover",
              }}
              width="160"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Jeneba Grace Salia
              </h2>
              <p className="text-lg font-medium text-gray-600 mb-4">
                Admin and Human Resource Manager
              </p>
              <p className="text-gray-700">
                {/*Give a brief description of the person here in the given role.(Admin and Human Resource Manager)*/}
                Jeneba is a Sierra Leonean with over 10 years of experience in
                the development sector. She has worked with various
                international and national organizations in different
                capacities. She has experience in project management, monitoring
                and evaluation, research, and advocacy. She holds a Bachelor of
                Science degree in Economics and a Master of Science degree in
                Development Studies from Njala University. She is currently
                pursuing a Master of Business Administration (MBA) degree at the
                Institute of Public Administration and Management (IPAM) at the
                University of Sierra Leone. Jeneba is a member of the Sierra
                Leone Association of Non-Governmental Organizations (SLANGO) and
                the Sierra Leone Economics Association (SLEA).
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-200" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-12 px-4 text-left">
        <h1 className="text-4xl font-bold text-center mb-10">
          MoPADA SL Board of Directors
        </h1>
        <div className="space-y-8">
          <div className="flex gap-6">
            <img
              alt="Jabez K. Amadu"
              className="w-36 h-48 flex-none bg-gray-300"
              height="200"
              src={JabezKAmadu}
              style={{
                aspectRatio: "150/200",
                objectFit: "cover",
              }}
              width="150"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Jabez K. Amadu</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Governance & Programme Manager
                </p>
                <p className="text-gray-700">
                  Jabez is a MoPADA SL Director and has been involved with the
                  organization since 2015. He is a professional engineer and has
                  worked in the environmental field for over 20 years. Robin is
                  currently the Director of Environmental Services for the
                  Tsleil-Waututh Nation. He has a passion for the outdoors and
                  enjoys spending time with his family hiking, biking, skiing,
                  and camping.
                </p>
              </div>
              <hr className="border-t border-gray-300" />
            </div>
          </div>
          <div className="flex gap-6">
            <img
              alt="Raph C. L. Jones"
              className="w-36 h-48 flex-none bg-gray-300"
              height="200"
              src={RaphCLJones}
              style={{
                aspectRatio: "150/200",
                objectFit: "cover",
              }}
              width="150"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Raph C. L Jones</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Advocacy & Communication Coordinator
                </p>
                <p className="text-gray-700">
                  Raph is a MoPADA SL Director and has been involved with the
                  organization since 2015. He is a professional engineer and has
                  worked in the environmental field for over 20 years. Robin is
                  currently the Director of Environmental Services for the
                  Tsleil-Waututh Nation. He has a passion for the outdoors and
                  enjoys spending time with his family hiking, biking, skiing,
                  and camping.
                </p>
              </div>
              <hr className="border-t border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
