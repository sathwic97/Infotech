import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewAccount from "./components/NewAccount";
import LoginPage from "./components/LoginPage";
import DailyStatus from "./components/DailyStatus";
import CreateRequest from "./components/CreateRequest";
import ApplyLeave from "./components/ApplyLeave";
function App() {
  return (
    <div className="flexContainer">
      <BrowserRouter>
        <nav>
          <img
            src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png"
            alt=""
          />
          <Link to={"/"}>
            <h5>Login/SignUp</h5>
          </Link>
          <Link to={"/newAccount"}>
            <h5>Create New Account</h5>
          </Link>
          <Link to={"/dailyStatus"}>
            <h5>Daily Status update</h5>
          </Link>
          <Link to={"/createRequest"}>
            <h5>Create Request</h5>
          </Link>
          <Link to={"/applyLeave"}>
            <h5>Apply Leave</h5>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/newAccount" element={<NewAccount />} />
          <Route path="/dailyStatus" element={<DailyStatus />} />
          <Route path="/createRequest" element={<CreateRequest />} />
          <Route path="/applyLeave" element={<ApplyLeave />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
