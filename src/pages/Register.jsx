import "../public/css/style.css";
import "../public/css/login.css";

import LP_Navbar from "../components/LP_Navbar";
import PageRegister from "../components/PageRegister";

function Register() {
  return (
    <div className="App bg-aliceblue h-100">
      <LP_Navbar />
      <PageRegister />
    </div>
  );
}

export default Register;
