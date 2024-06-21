import Image from "next/image";
import LandingPage from "./LandingPage/LandingPage";
import Management from "./Management/Management";

import AboutUs from "./About/AboutUs";
import Leadership from "./Leadership/Leadership";
import CaseStudy from "./CaseStudy/CaseStudy";
import Solutions from "./Solutions/Solutions";

import Footer from "./Footer/Footer";


import Service from "./Services/Service";
// import { Header } from "./Navbar/Header";

export default function Home() {
  return (
    <div className="font-roboto">
      <LandingPage />
      <AboutUs />

      <Management />

      <Leadership />
      <CaseStudy />
       <Solutions />

     <Service />

      <Footer />
    </div>
  );
}
