import axios from 'axios'

export const GET_POST_REQUEST = 'GET_POST_REQUEST'

const getPostsRequest = () => {
	return {
		type: GET_POST_REQUEST
	}
}

export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const getPostsSuccess = (json) => {
	return {
		type: GET_POST_SUCCESS,
		posts: json,
		receivedAt: Date.now()
	}
}

export const GET_POST_FAILURE = 'GET_POST_FAILURE'
const getPostsFailure = (error) => {
	return {
		type: GET_POST_FAILURE,
		error
	}
}

export const getPosts = () => {
	return (dispatch) => {
		dispatch(getPostsRequest())
		return axios.get('http://localhost:3002/post.json')
		  .then(res => 
		  	dispatch(getPostsSuccess(res.data))
		  	).catch(err => 
		  	dispatch(getPostsFailure(err))
		  	)

	}
}
