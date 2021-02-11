import React, { useState, useEffect } from 'react'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import baseURL from "../../baseURL"
import Loading from '../../Animations/Loading'

function Blogs() {

    const [blogs, SetBlogs] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/api/blogs/toUI`, {
            method: 'get'
        }).then(res => res.json())
            .then(data => SetBlogs(data))
    }, [])

    const [page, SetPage] = useState(1)
    const blogs_per_page = 1
    const no_of_pages = Math.ceil(blogs.length / blogs_per_page)
    const year = {
        1: "1st year",
        2: "2nd year",
        3: "3rd year",
        4: "final year",
    }

    return (
        <div>
            <div className=" pagesg">
                <div className="overlayg">
                    <div className="pageTitleg titleBoldg">
                        BLOGS
                    </div>
                </div>
            </div>

            <div style={{ background: 'white', overflow: 'hidden' }} >
                <Loading time={2} />
                <div>
                    {
                        blogs.slice((page - 1) * blogs_per_page, page * blogs_per_page).map(blog => (
                            <Jumbotron fluid style={{ background: 'white', width: '80vw', margin: 'auto', paddingBottom: '1rem' }} key={blog._id}>
                                <Container>
                                    <h2>{blog.title}</h2>
                                    <p>Posted by {blog.postedBy.linkedin_url !== "https://www.linkedin.com/in/username/" ? <a href={blog.postedBy.linkedin_url} target='_blank'>{blog.postedBy.name}</a> : blog.postedBy.name} {`(reg. no :- ${blog.postedBy.registration_no == 'xxxxxxxx' ? 'NA' : blog.postedBy.registration_no}, ${blog.postedBy.year == -1 ? 'year - NA' : year[blog.postedBy.year]})`} on {new Date(blog.publishedAt).toLocaleDateString()}</p>
                                    <Button href={`/blogs/${blog._id}`}>See More</Button>
                                </Container>
                                <hr />
                            </Jumbotron>
                        ))
                    }
                    {
                        !blogs.length && <h3 className='text-center mt-5'>No blogs available...!</h3>
                    }
                    <div className='float-right mr-5 mb-5'>
                        {

                            (page > 1) && <Button className='mx-1' onClick={() => {
                                SetPage(page => page - 1)
                            }}>🡨 Previous</Button>

                        }
                        {
                            (page < no_of_pages) && <Button className='mx-1' onClick={() => {
                                SetPage(page => page + 1)
                            }}>Next 🡪</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs