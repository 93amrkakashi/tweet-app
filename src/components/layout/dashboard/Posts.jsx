import React from "react";
import { usePosts } from "../../../hooks/posts";
import Post from "./Post";

function Posts({posts}) {

  // const { posts, isLoading } = usePosts()
  // console.log(posts)
  return (
    <>
      {posts?.lenngth === 0
        ? "no posts yet"
        : posts?.map( post => <Post key={post.id} post={post} />)}
    </>
  );
}

export default Posts;
