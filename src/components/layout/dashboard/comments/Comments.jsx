import React from 'react'
import { useParams } from 'react-router-dom'
import { usePost } from '../../../../hooks/posts'
import Post from '../Post'
import Comment from "./Comment";

function Comments() {
  const {id} = useParams()
const { post, isLoading } = usePost(id)
if (isLoading) return "loading ....."
// console.log(id);

  return (
    <>
      <Post post={post} />
      <Comment id={id} />
    </>
  )
}

export default Comments