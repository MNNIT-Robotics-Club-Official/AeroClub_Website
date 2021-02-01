import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../css/SingleBlog.css'
import Loading from '../../Animations/Loading'
import { Button, Card, Container, Jumbotron } from 'react-bootstrap'

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

            <div className=" pagesp" style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)), url(${blog?.pic})` }}>
                    <div className="overlayp">
                        <div className="pageTitlep titleBoldp">
                            {blog?.title}
                            {/* <div className="post-heading"> */}
                                {/* <h5 style={{fontSize:'1rem'}}>By {project?.teamname}</h5> */}
                                <p className="meta" ><em style={{fontSize: '0.8rem'}}>Posted by {blog?.postedBy} on {new Date(blog?.publishedAt).toLocaleDateString()}</em></p>
                            {/* </div> */}
                            </div>
                    </div>
            </div>

            <Jumbotron fluid style={{ background: 'white', width: '100%', margin: 'auto', paddingBottom: '1rem', paddingLeft:'2rem' }}>
                <Container >
                    <h4>Content:</h4>
                    <p dangerouslySetInnerHTML={{ __html: blog?.body }}></p>
                    
                </Container>
                <hr />
            </Jumbotron>


        </div>
    )
}

export default SingleBlog
