import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card, Container, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import baseURL from "../../baseURL"

export default function DashBlogs({ user }) {

    const [blogs, setBlogs] = useState([])
    const history = useHistory()
    const year = {
        1: "1st year",
        2: "2nd year",
        3: "3rd year",
        4: "final year",
    }

    useEffect(() => {
        fetch(`${baseURL}/api/blogs/toUser`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className='container'>
            <Accordion>

                {
                    blogs.map(blog => (
                        <Card className="rounded" key={blog._id}>
                            <Card.Header style={{ cursor: 'pointer' }}>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey={blog._id}>
                                    {blog.title}
                                    <p className="float-right">
                                        <Badge variant={blog.accepted ? 'success' : 'danger'}>
                                            {blog.accepted ? 'Accepted' : 'Not accepted'}
                                        </Badge>
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={blog._id}>
                                <Card.Body>
                                    {
                                        blog.accepted ?
                                            <Button variant='primary' onClick={() => {
                                                history.push(`/blogs/${blog._id}`)
                                            }}>Click to See</Button>
                                            :
                                            <>
                                                <Button variant='primary' data-toggle="collapse" data-target={`#preview${blog._id}`} aria-expanded="false" aria-controls="preview">Click to preview</Button>
                                                <br /><br />
                                                <div id={`preview${blog._id}`} className="collapse">
                                                    <div className="pagesp" style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)), url(${blog.pic})` }}>
                                                        <div className="overlayp">
                                                            <div className="pageTitlep titleBoldp">
                                                                {blog.title}
                                                                <p className="meta" ><em style={{ fontSize: '0.8rem' }}>Posted by {user.linkedin_url !== "https://www.linkedin.com/in/username/" ? <a href={user.linkedin_url} target='_blank'>{user.name}</a> : user.name} {`(reg. no :- ${user.registration_no == 'xxxxxxxx' ? 'NA' : user.registration_no}, ${user.year == -1 ? 'year - NA' : year[user.year]})`} on {new Date(Date.now()).toLocaleDateString()}</em></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Jumbotron fluid style={{ background: 'white', width: '100%', margin: 'auto', paddingBottom: '1rem', paddingLeft: '2rem', overflow: 'auto' }}>
                                                        <Container >
                                                            <p dangerouslySetInnerHTML={{ __html: blog.body }}></p>
                                                        </Container>
                                                        <hr />
                                                    </Jumbotron>
                                                </div>
                                            </>
                                    }

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))
                }
            </Accordion>
        </div>
    )
}
