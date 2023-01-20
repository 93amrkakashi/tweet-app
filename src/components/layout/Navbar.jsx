import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/auth";
import { root, timeline, users } from "../../utils/routes";
import { useAuth } from "./../../hooks/auth";
import Avtar from "./Avtar";

function Navbar() {
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();

  useEffect(() => {
    // isLoading()
    // if (!isLoading && !user){
    //   navigate(login)
    // }else{
    //   navigate(root)
    // } ;
  }, [user]);
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <Link to={timeline}>TWEETS</Link>
        </div>
        {user && (
          <>
            <div className="navs">
              <Link to={`/profile/${user?.id}`}>profile</Link>
              <Link to={users}>All users</Link>
            </div>

            <div className="user">
              <div className="avatar">
                <Avtar user={user} size={"40px"} />
                <p>{user?.username}</p>
              </div>
              <button onClick={logout}>logout</button>
            </div>
          </>
        )}

        {/* <div className="user">
          {user && }
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
