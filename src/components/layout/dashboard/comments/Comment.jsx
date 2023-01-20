import React from "react";
import { useForm } from "react-hook-form";
import Avtar from "../../Avtar";
import { useAuth } from "./../../../../hooks/auth";
import { useAddComment, useComments } from "./../../../../hooks/comments";
import SingleComment from "./SingleComment";

// export function Comments({ id }) {
//   const postID = id;
//   const { user, isloading } = useAuth();
//   const { comments, isLoading: commentsloading } = useComments(postID);
//   console.log(comments);

//   if (commentsloading) return "loading";
//   return (
//     <>
//       {comments.map((comment) => (
//         <> 
//       <Avtar user={user} />
        
//         <h3>{comment?.text.text}</h3>

//         <i  className="icon fa-solid fa-trash"></i> 
      
//         </>
//       ))}
//     </>
//   );
// }

function Comment({ id }) {
  const { user, isloading } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const { addComment, isLoading } = useAddComment({
    postID: id,
    uid: user?.id,
  });

  function handleComment(data) {
    addComment({
      text: data.text,
    });
    console.log(data);
    reset();
  }

  return (
    <div>
      <>
        <Avtar user={user} />
        <h2>Create a post</h2>
        <form onSubmit={handleSubmit(handleComment)}>
          <textarea type="text" {...register("text", { required: true })} />
          <button type="submit">create post</button>
        </form>
      </>

      {/* <Comments id={id} /> */}
      <SingleComment id={id} />
    </div>
  );
}

export default Comment;
