import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import axios from "axios"

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/blog")
      .catch(err => console.log(err))
    const data = await res.data
    return data
  }
  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.blogs)
    })
  }, [])
  console.log("blogs is ",blogs)
  return <div>
    {blogs &&
      blogs.map((blog, index) => (
        <Blog
          isUser={localStorage.getItem("userId")===blog.user._id}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          id={blog._id}
          userName={blog.user.name} />
      ))}
  </div>
}

export default Blogs