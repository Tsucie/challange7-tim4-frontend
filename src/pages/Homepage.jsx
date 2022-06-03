import "../public/css/style.css";

import LP_Navbar from "../components/LP_Navbar";
import LP_Header from "../components/LP_Header";
import LP_OurService from "../components/LP_OurService";
import LP_WhyUs from "../components/LP_WhyUs";
import LP_Testimonial from "../components/LP_Testimonial";
import LP_Start from "../components/LP_Start";
import LP_FAQ from "../components/LP_FAQ";
import LP_Footer from "../components/LP_Footer";

function Homepage() {
  return (
    <div className="App">
      <LP_Navbar />
      <LP_Header />
      <LP_OurService />
      <LP_WhyUs />
      <LP_Testimonial />
      <LP_Start />
      <LP_FAQ />
      <LP_Footer />
    </div>
  );
}

export default Homepage;
