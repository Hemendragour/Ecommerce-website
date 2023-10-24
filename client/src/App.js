import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />



        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="Admin" element={< AdminDashboard />} />
          <Route path="Admin/create-category" element={< CreateCategory />} />
          <Route path="Admin/create-product" element={< CreateProduct />} />
          <Route path="Admin/users" element={< Users />} />

        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/*" element={<Pagenotfound />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/login" element={<Login />}></Route>






      </Routes>
    </>
  );
}

export default App;
