import React from 'react'

const BlogList = ({blogs}) => {

    return (
        <div className="blog-list">
            {
                blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>by {blog.author}</p>
                        <button className="btn-danger">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default BlogList;