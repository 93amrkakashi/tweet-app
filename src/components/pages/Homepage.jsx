import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth, useLogin } from "../../hooks/auth";
import { auth } from "../../utils/firebase-config";
import { login, main } from "../../utils/routes";
import Timeline from "../layout/dashboard/Timeline";
import Navbar from "../layout/Navbar";
import { root } from "./../../utils/routes";
import Sidebar from "./../layout/Sidebar";
// import Dashboard from "./../layout/Dashboard";
// import Layers from "../layout/Layers";
// import Timeline from "./../layout/dashboard/posts/Timeline";

function Homapage() {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  // console.log(user)
  useEffect(() => {
    // isLoading()
    if (!isLoading && !user) {
      navigate(login);
    }
  }, [isLoading, user]);

  if (isLoading) {
    return "loading ....";
  }
  // console.log(window.location.href)
  return (
    <>
      <div className="home">
        <Navbar />
        {/* <Sidebar  /> */}
        <div className="layout">
          {window.location.href == "http://localhost:3000/" && <Timeline />}
          <Outlet className="content" />
        </div>
      </div>
    </>
  );
}

export default Homapage;
