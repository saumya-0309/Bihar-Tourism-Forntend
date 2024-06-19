import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Accounts from "../pages/Accounts";
import MainPage from "../pages/MainPage";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import Bookings from "../pages/Bookings";
import AllTour from "../pages/AllTour";
import AddTour from "../pages/AddTour";


export default function AppRoutes() {
 
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/account" element={<Accounts />} />
      </Route>
      <Route path="/" element={<ProtectedAdminRoutes/>}>
        <Route path="/dashboard"  element={<Dashboard />}/>
        <Route path="/bookings"  element={<Bookings />}/>
        <Route path="/alltour"  element={<AllTour />}/>
        <Route path="/addtour"  element={<AddTour />}/>
      </Route>
      <Route>
        <Route path="/account/login"  element={ <Login />} />
      </Route>
      <Route>
        <Route path="/account/signup"  element={ <Signup />} />
      </Route>
      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
}
