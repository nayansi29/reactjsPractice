import React from "react";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Login from "./components/Login";
import Users from "./components/Users";
import Logout from "./components/Logout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dasboard from "./components/Dasboard";
import DynamicTable from "./dynamic-table/DynamicTable";
import GeoLocation from "./components/GeoLocation";
import UserData from "./components/UserData";
import SearchBar from "./components/SearchBar";

function App() {

  let isLogged = true;
  const data = { user: 'user Not Logged In', };
  const onSearchSubmit = (term) => {
    console.log(term);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signUp" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/table" element={<DynamicTable />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/userdata" element={<UserData />} /> */}
        <Route path="/dashboard" element={isLogged ? <Dasboard /> : <Navigate to="/login" state={data} replace />} />
        <Route path="/header/:category" element={<Header />} />
        <Route path="/header/:category/:id" element={<Header />} />
        <Route path="/geolocation" element={<GeoLocation />} />
        <Route path="/searchbar" element={<SearchBar onSubmit={onSearchSubmit} />} />
        <Route path="*" element={<h1> Error 404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;