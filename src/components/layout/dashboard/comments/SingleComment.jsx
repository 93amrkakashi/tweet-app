import React from 'react'
import { useAuth } from '../../../../hooks/auth';
import { useComments, useDeleteComment } from '../../../../hooks/comments';
import Avtar from "./../../Avtar";
import { useUser } from "./../../../../hooks/users";
// import { useAuth } from "./../../../../hooks/auth";


export function CommentBody({comment}) {
const {id} = comment
  const userid = comment?.uid;
  // console.log(userid)
  const { deleteComment, isLoading } = useDeleteComment(id)
  const { user:curr, isloading } = useAuth();
  // console.log(curr)
  // const uid = comment?.uid
  const { user, isLoading:userLoading } = useUser(userid);
  if (isLoading) return "loading ...";
  // console.log(user);




  // console.log(comment)
  return(
    <> 
    <Avtar user={user} />
      
      <h3>{comment?.text.text}</h3>

      {curr?.id==comment?.uid &&<i onClick={deleteComment}  className="icon fa-solid fa-trash"></i>}
       
    
      </>
  )
  
}






function SingleComment({id}) {
  const postID = id;
  // const { user, isloading } = useUser();
  const { comments, isLoading: commentsloading } = useComments(postID);
  // console.log(comments);

  if (commentsloading) return "loading";
  // if (isloading) return "loading";
  return (
    <>
      {comments.map((comment) => <CommentBody key={id} comment={comment}/>)}
    </>
  );
}

export default SingleComment