import { connect } from "react-redux"
import PostList from "../components/post/PostList"

const mapStateToProps = state => {
  const length = state.posts.length
  const currentState = state.posts[length - 1]
  return { posts: currentState.items }
}

const GetPostList = connect(mapStateToProps)(PostList)

export default GetPostList
