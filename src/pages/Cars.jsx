import "../public/css/style.css";
import LP_Navbar from "../components/LP_Navbar";
import LP_Search from "../components/LP_Search";
import LP_Footer from "../components/LP_Footer";

function Cars() {
  return (
    <div className="App">
      <LP_Navbar />
      <LP_Search />
      <LP_Footer />
    </div>
  );
}

export default Cars;
