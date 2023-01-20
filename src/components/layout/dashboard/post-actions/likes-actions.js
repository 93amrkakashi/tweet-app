import { Link } from "react-router-dom";
import { useComments } from "../../../../hooks/comments";
// import { comments } from "../../../../utils/routes";
import { useAuth } from "./../../../../hooks/auth";
import { useDeletePost, useToggleLike } from "./../../../../hooks/posts";

export function Footer({ post }) {
  const { user, isLoading } = useAuth();
  const { likes, id, uid } = post;
  const isLiked = likes.includes(user?.id);

  const { toggleLike, isLoading: likeLoading } = useToggleLike({
    id,
    isLiked,
    uid: user?.id,
  });

  const { deletePost, isLoading: deleteloading } = useDeletePost(id);

  const postID = post?.id;
  const { comments, isLoading: commentsloading } = useComments(postID);
  if (commentsloading) return "loading";
  // console.log(comments)

  return (
    <div className="post-footer">
      <div className="totals">
        {likes?.length <= 0 ? null : <h5>{likes?.length} Likes</h5>}
        {comments?.length <= 0 ? null : <h5>{comments?.length} Comments</h5>}

        {/* <h4>{comments?.length} Comments</h4> */}
      </div>

      <div className="actions">
        <div onClick={toggleLike}>
          {isLiked ? (
            <i className="icon love-icon fa-solid fa-heart"></i>
          ) : (
            <i className="icon love-icon fa-regular fa-heart"></i>
          )}
        </div>
        <Link to={`/comments/${id}`}>
          {comments?.length <= 0 ? (
            <i className="icon comment-icon fa-regular fa-comment"></i>
          ) : (
            <i className="icon comment-icon fa-solid fa-comment"></i>
          )}
        </Link>

        {uid == user?.id && (
          <i onClick={deletePost} className="icon trash-icon fa-solid fa-trash"></i>
        )}
      </div>
    </div>
  );
}
