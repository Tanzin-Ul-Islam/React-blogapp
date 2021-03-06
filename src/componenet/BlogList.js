import React from 'react'
import { Link } from 'react-router-dom'
const BlogList = ({ blogs }) => {

    return (
        <div className="blog-list">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>by {blog.author}</p>
                        <button className="btn-danger">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default BlogList;