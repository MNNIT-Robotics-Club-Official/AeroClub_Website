import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../css/SingleBlog.css'
import Loading from '../../Animations/Loading'

function SingleBlog() {

    const { blogId } = useParams()
    const [blog, setBlog] = useState(undefined)

    useEffect(() => {
        fetch(`/api/blogs/${blogId}`, {
            method: 'get'
        }).then(res => res.json())
            .then(data => setBlog(data))

    }, [])

    return (
        <div>
            <Loading />

            <header id="header" style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)), url(${blog?.pic})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <h1>{blog?.title}</h1>
                            <div className="post-heading">
                                <h5>Problems look mighty small from 150 miles up</h5>
                                <span className="meta"><em>Posted by {blog?.postedBy} on {new Date(blog?.publishedAt).toLocaleDateString()}</em></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container my-5">
                <div className="row mb-5">
                    <article>
                        <div className="col-lg-10 col-md-8 mx-auto body" dangerouslySetInnerHTML={{ __html: blog?.body }}>
                        </div>
                    </article>
                </div>
            </div>


        </div>
    )
}

export default SingleBlog
