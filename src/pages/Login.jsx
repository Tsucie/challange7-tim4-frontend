import "../public/css/login.css";
import LP_Navbar from "../components/LP_Navbar";
import PageLogin from "../components/PageLogin";

function Login() {
  return (
    <div className="App bg-aliceblue h-100">
      <LP_Navbar />
      <PageLogin />
    </div>
  );
}

export default Login;
