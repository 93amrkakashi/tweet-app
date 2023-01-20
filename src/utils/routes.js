import { createBrowserRouter } from "react-router-dom";
import Login from "../components/pages/Login";
import Rigster from "../components/pages/Rigster";
import Homepage from "../components/pages/Homepage";
import Timeline from "../components/layout/dashboard/Timeline";
import Comments from "../components/layout/dashboard/comments/Comments";
import Profile from "../components/layout/dashboard/profile/Profile";
import Users from "../components/layout/dashboard/users/Users";
// import Layers from "./../components/layout/Layers";

export const root = "/";
export const login = "/login";
export const rigster = "/rigster";
// export const main = "/main";
export const users = "/users";
export const timeline = "/timeline";
export const profile = "/profile/:id";
export const comments = "/comments/:id";


export const routes = createBrowserRouter([
  { path: login, element: <Login /> },
  { path: rigster, element: <Rigster /> },
  { path: root, element: <Homepage /> ,
  children: [
    {
      path: users,
      element: <Users />,
    },
    {
      path: timeline,
      element: <Timeline />,
    },{
      path: profile,
      element: <Profile /> ,
    },
    {
      path: comments,
      element: <Comments />,
    },
  ],},
  
]);
