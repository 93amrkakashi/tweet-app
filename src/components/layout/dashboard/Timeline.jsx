import React from 'react'
import { usePosts } from '../../../hooks/posts'
import Addpost from '../Addpost'
import Posts from './Posts'

function Timeline({post}) {

  const { posts, isLoading } = usePosts()
  // console.log(posts)
  return (
    <div>
      <Addpost />
      <Posts posts={posts}/>
    </div>
  )
}

export default Timeline