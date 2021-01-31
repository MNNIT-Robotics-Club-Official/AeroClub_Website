import React, { useState, useEffect, useRef } from 'react'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import Loading from '../../Animations/Loading'
import PaginationComp from '../PaginationComp'

function Blogs() {

    const [blogs, SetBlogs] = useState([])
    const [blogsPerPage, SetBlogsPerPage] = useState(2)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch('/api/blogs', {
            method: 'get'
        }).then(res => res.json())
            .then(data => SetBlogs(data))
    }, [])

    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    console.log(indexOfLastBlog, indexOfFirstBlog)

    const currBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
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

            <div style={{ background: 'white' }}>
                <Loading />
                {
                    currBlogs.map(blog => (
                        <Jumbotron fluid style={{ background: 'white', width: '80vw', margin: 'auto', paddingBottom: '1rem' }} key={blog.id}>
                            <Container>
                                <h2>{blog.title}</h2>
                                <p>Posted by {blog.postedBy} on {new Date(blog.publishedAt).toDateString()}</p>
                                <Button href={`blogs/${blog.id}`}>See More</Button>
                            </Container>
                            <hr />
                        </Jumbotron>
                    ))
                }
                <PaginationComp elemsPerPage={blogsPerPage} totalElems={blogs.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default Blogs