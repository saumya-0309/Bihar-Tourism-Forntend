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
import BlogPage from "../pages/BlogPage";
import Logout from "../pages/Logout";
import AdminBlog from "../pages/AdminBlog";
import AddBlog from "../pages/AddBlog";


export default function AppRoutes() {
 
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/account" element={<Accounts />} />
        <Route path="logout"  element={ <Logout />} />
      </Route>
      <Route path="/" element={<ProtectedAdminRoutes/>}>
        <Route path="/dashboard"  element={<Dashboard />}/>
        <Route path="/bookings"  element={<Bookings />}/>
        <Route path="/alltour"  element={<AllTour />}/>
        <Route path="/addtour"  element={<AddTour />}/>
        <Route path="/blogs"  element={<AdminBlog />}/>
        <Route path="/blogs/addblog"  element={<AddBlog />}/>
      </Route>
      <Route>
        <Route path="/account/login"  element={ <Login />} />
      </Route>
      <Route>
        <Route path="/account/signup"  element={ <Signup />} />
      </Route>
      <Route>
      </Route>
      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
}
