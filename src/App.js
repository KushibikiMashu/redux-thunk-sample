import React, { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios
      .get("/post.json")
      .then(res => setPost(res.data))
      .catch(err => new Error(err))
  }, [])

  if (post === null) {
    return "Loading..."
  }

  return <div>{post.body}</div>
}

export default App
