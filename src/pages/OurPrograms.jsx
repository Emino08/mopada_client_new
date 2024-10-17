import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function OurPrograms() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Our Programs - Movement towards Peace And Development Agency
          (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Explore the various programs we offer at MoPADA-SL."
        />
      </Helmet>
      <Section label="Our Programs" /> <p>Our Programs</p>
    </div>
  );
}
