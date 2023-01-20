import React from 'react'
import { useForm } from "react-hook-form";
import { useAddPost } from '../../hooks/posts';
import { useAuth } from "./../../hooks/auth";

function Addpost() {

const { addPost, isLoading:postloading } = useAddPost()
const {user, isLoading:userloading}=useAuth();

  function handlePost(data) {
    addPost({
      uid:user?.id,
      text:data.text
    })
    console.log(data)
    reset()
  }
  const{register, handleSubmit,reset} = useForm()
  return (
    <div className='add-post'>
      <h2>Create a post</h2>
      <form onSubmit={handleSubmit(handlePost)}>
        <textarea type="text" {...register("text", {required:true})}/>
        <button type='submit'>create post</button>
      </form>
    </div>
  )
}

export default Addpost