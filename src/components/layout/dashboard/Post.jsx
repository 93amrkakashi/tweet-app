import React from "react";
import { useToggleLike } from "../../../hooks/posts";
import { useUser } from "../../../hooks/users";
import Avtar from "../Avtar";
import { useAuth } from "./../../../hooks/auth";
import { Footer } from "./post-actions/likes-actions";

export function Header({ uid }) {
  const { user, isLoading } = useUser(uid);
  // console.log(user);
  if (isLoading) return "loading ...";
  return (
    <div className="post-header">
      <div className="photo">
        <Avtar size={"50px"} user={user} />
      </div>
      <h2>{user.username}</h2>
    </div>
  );
}

function Post({ post }) {
  const { text, uid } = post;
  // console.log(uid);
  return (
    <div className="post">
      <Header uid={uid} />
      <div className="post-text">{text}</div>
      <Footer post={post} />
    </div>
  );
}

export default Post;
