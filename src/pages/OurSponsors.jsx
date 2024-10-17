import worldVisionImage from "/assets/partners/worldvision.jpeg";
import undpImage from "/assets/partners/undp.png";
import unicefImage from "/assets/partners/unicef.png";
import bmzImage from "/assets/partners/bmz.png";
import welthHugerHifeImage from "/assets/partners/welthungerhilfe.jpeg";
import childFundImage from "/assets/partners/childfung.png";
import vibrantVillageImage from "/assets/partners/vibrantvillage.png";
import waterAidImage from "/assets/partners/waterAid.png";
import osiwaImage from "/assets/partners/osiwa.png";
import isatImage from "/assets/partners/isat.png";
import actionAgainstHungerImage from "/assets/partners/actionagainsthunger.png";
import germanDoctorsImage from "/assets/partners/germandoctors.jpg";
import europeanUnionImage from "/assets/partners/europeanunion.webp";
import irishAidImage from "/assets/partners/irishaid.jpeg";
import Section from "../components/Section";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function OurSponsors() {
  const sponsors = [
    { name: "World Vision", image: worldVisionImage },
    { name: "UNDP", image: undpImage },
    { name: "UNICEF", image: unicefImage },
    { name: "BMZ", image: bmzImage },
    { name: "Welthungerhilfe", image: welthHugerHifeImage },
    { name: "Child Fund", image: childFundImage },
    { name: "Vibrant Village", image: vibrantVillageImage },
    { name: "Water Aid", image: waterAidImage },
    { name: "OSIWA", image: osiwaImage },
    { name: "ISAT", image: isatImage },
    { name: "Action Against Hunger", image: actionAgainstHungerImage },
    { name: "German Doctors", image: germanDoctorsImage },
    { name: "European Union", image: europeanUnionImage },
    { name: "Irish Aid", image: irishAidImage },
    // Add the rest of the sponsors here...
  ];

  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Our Sponsors - Movement towards Peace And Development Agency
          (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Meet the sponsors who support our cause and help us make a difference."
        />
      </Helmet>
      <Section label={"Our Sponsors"} />

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-end"
          >
            <Link to="#">
              <img
                className="rounded-t-lg"
                src={sponsor.image}
                alt={sponsor.name}
              />
            </Link>
            <div className="p-5 text-center">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {sponsor.name}
                </h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
