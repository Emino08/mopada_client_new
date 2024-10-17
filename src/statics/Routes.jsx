import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home"; // import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Donation from "../pages/Donation";
import Events from "../pages/Events";
import NewsLetter from "../pages/NewsLetter";
import GetInvolved from "../pages/Volunteer";
import OurHistory from "../pages/OurHistory";
import OurPrograms from "../pages/OurPrograms";
import OurSponsors from "../pages/OurSponsors";
import OurTeam from "../pages/OurTeam";
import OurWork from "../pages/OurWork";
import JobOpporunities from "../pages/JobOpportunities";
import ContactUs from "../pages/ContactUs";
import NewsLetterSignUp from "../pages/NewsLetterSignup";

import Advocacy from "../pages/ourwork/Advocacy";
import Gender from "../pages/ourwork/Gender";
import GovernanceEducation from "../pages/ourwork/GovernanceEducation";
import LivelihoodSupport from "../pages/ourwork/LivelihoodSupport";
import WashHealthNutrition from "../pages/ourwork/Wash";
import ApplicationForm from "../pages/ApplicationForm";
import Page404 from "../pages/Page404";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news-letter" element={<NewsLetter />} />
        <Route path="/volunteer" element={<GetInvolved />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/our-programs" element={<OurPrograms />} />
        <Route path="/our-sponsors" element={<OurSponsors />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/job-opportunities" element={<JobOpporunities />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/news-letter-signup" element={<NewsLetterSignUp />} />
        <Route path="/application" element={<ApplicationForm />} />

        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/governance-education" element={<GovernanceEducation />} />
        <Route path="/livelihood-support" element={<LivelihoodSupport />} />
        <Route
          path="/wash-health-nutrition"
          element={<WashHealthNutrition />}
        />
        <Route path="404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}
