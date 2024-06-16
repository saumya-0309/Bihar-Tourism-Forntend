import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Accounts from "../pages/Accounts";


export default function AppRoutes() {
 
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/account" element={<Accounts />} />
      </Route>
      <Route>
        <Route path="/dashboard"  element={ <Dashboard />} />
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
