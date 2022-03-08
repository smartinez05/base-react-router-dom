import React from "react";
import { Button } from "react-bootstrap";
import { Route, Routes, useNavigate, Link, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked");
    navigate("/");
  };
  return (
    <>
      <Layout>
        <h1>Dashboard</h1>
        <Button onClick={handleClick} className="mx-1">
          Logout
        </Button>
        <Button as={Link} to="welcome" className="mx-1">
          Say Welcome
        </Button>
        <Button as={Link} to="goodbye" className="mx-1">
          Say Goodbye
        </Button>

        <Outlet />
        {/* <Routes>
          <Route path="welcome" element={<h1>Welcome</h1>} />
        </Routes> */}
      </Layout>
    </>
  );
}
