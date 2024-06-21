import Image from "next/image";
import LandingPage from "./LandingPage/LandingPage";
import Service from "./Services/Service";
import AboutUs from "./About/AboutUs";
import Management from "./Management/Management";
import Solutions from "./Solutions/Solutions";
// import CaseStudy from "./CaseStudy/CaseStudy";
import Leadership from "./Leadership/Leadership";
import Footer from "./Footer/Footer";
// import { Header } from "./Navbar/Header";

export default function Home() {
  return (
    <div className="font-roboto">
      <LandingPage />
      <AboutUs />

      <Management />
      

      <Leadership />
      {/* <CaseStudy /> */}
      <Solutions />

      <Service />

      <Footer />
    </div>
  );
}
