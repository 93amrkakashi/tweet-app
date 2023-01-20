import React from "react";
import { usePosts } from "../../../../hooks/posts";
import { useUser } from "../../../../hooks/users";
import Avtar from "../../Avtar";
import { useAuth } from "./../../../../hooks/auth";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import Posts from "../Posts";
import Update from "./Update";

function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postsloading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  if (userLoading) return "loading ...";
  if (postsloading) return "loading ...";
  const nolikes = [];

  const likes = posts?.map((post) => post?.likes.length);
  const allLikes = likes?.reduce(add, 0);

  function add(accumulator, a) {
    return accumulator + a;
  }

  return (
    <>
      <div className="profile">
        <div className="profile-info">
          <div className="photo">
            <Avtar size={"90px"} user={user} />
            <h4>{user?.username}</h4>
          </div>
          <h3>
            total posts <br /> {posts?.length}
          </h3>
          <h3>
            total likes <br /> {allLikes}
          </h3>
          <h3>
            joined at <br /> {format(user?.date, "dd-MM-yyyy")}
          </h3>
        </div>
        <Update user={user} />

        <div className="profile-posts">
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
}

export default Profile;
