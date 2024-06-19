import Image from "next/image";
import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./About/AboutUs";
import Solutions from "./Solutions/Solutions";
import CaseStudy from "./CaseStudy/CaseStudy";
import Leadership from "./Leadership/Leadership";
import Footer from "./Footer/Footer";
import { Header } from "./Navbar/Header";

export default function Home() {
  return (
    <div className="">
     
      <LandingPage />
      <AboutUs />

      <Leadership />
      <CaseStudy />
    <Solutions />

      <Footer />
    </div>
  );
}
