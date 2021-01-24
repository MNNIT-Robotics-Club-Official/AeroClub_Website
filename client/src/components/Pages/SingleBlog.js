import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../css/SingleBlog.css'

function SingleBlog() {

    const { blogId } = useParams()
    const [blog, setBlog] = useState(undefined)

    fetch(`/api/blogs/${blogId}`, {
        method: 'get'
    }).then(res => res.json())
        .then(data => setBlog(data))

    return (
        <div>
            <header className="masthead" id="header" style={{ background: `url(${blog?.pic})` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-heading">
                                <h1>{blog?.title}</h1>
                                <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
                                <span className="meta">Posted by {blog?.postedBy} on {new Date(blog?.publishedAt).toDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <article>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={{ __html: blog?.body }}>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default SingleBlog
