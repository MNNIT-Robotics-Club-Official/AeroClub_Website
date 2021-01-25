import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Jumbotron } from 'react-bootstrap'

function Blogs() {

    const [blogs, SetBlogs] = useState([])

    useEffect(() => {
        fetch('/api/blogs', {
            method: 'get'
        }).then(res => res.json())
            .then(data => SetBlogs(data))
    }, [])

    return (
        <div style={{ background: 'white' }}>
            {
                blogs?.map(blog => (
                    <Jumbotron fluid style={{ background: 'white', width: '80vw', margin: 'auto', paddingBottom: '1rem' }} key={blog.id}>
                        <Container>
                            <h2>{blog.title}</h2>
                            <p>Posted by {blog.postedBy} on {blog.publishedAt}</p>
                            <Button href={`blogs/${blog.id}`}>See More</Button>
                        </Container>
                        <hr />
                    </Jumbotron>
                ))
            }
        </div>
    )
}

export default Blogs