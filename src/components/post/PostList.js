import React from 'react'
import Post from './Post'

function PostList({posts}) {
	return (
	<ul>
	 	 <Post body={posts.body} />
	</ul>
	)
}

export default PostList