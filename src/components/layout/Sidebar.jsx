import React, { useState } from "react";
import { Link } from "react-router-dom";
import { main, profile, users } from "./../../utils/routes";
import { useAuth } from "./../../hooks/auth";
import Avtar from "./Avtar";

function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const { user, isLoading } = useAuth();
  // console.log(user);
  if (isLoading) {
    return "loading .......";
  }
  return (
    <div className={toggle ? "hide" : "side-bar"}>
      <div onClick={() => setToggle(!toggle)} className="toggle">
        <i class="fa-solid fa-arrow-right-arrow-left"></i>
      </div>
      {!toggle && (
        <>
          <div className="user">
            <Avtar user={user} />
            <p>{user?.username}</p>
          </div>
          <div className="navs">
            <button>
              <Link to={`/profile/${user.id}`}>profile</Link>
            </button>
            <button>
              <Link to={users}>All users</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
