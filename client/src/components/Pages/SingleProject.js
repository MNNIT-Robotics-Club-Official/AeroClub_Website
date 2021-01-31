import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../css/SingleBlog.css'
import Loading from '../../Animations/Loading'
import { Button, Card, Container, Jumbotron } from 'react-bootstrap'

function SingleProject() {

    const { projectId } = useParams()
    const [project, setProject] = useState(undefined)

    useEffect(() => {
        fetch(`/api/projects/${projectId}`, {
            method: 'get'
        }).then(res => res.json())
            .then(data => setProject(data))

    }, [])

    return (
        <div>
            <div className=" pagesp">
                <div className="overlayp">
                    <div className="pageTitlep titleBoldp">

                    </div>
                </div>
            </div>
            <Loading />

            <header id="header" style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4)), url(${project?.pic})` }} >
                {/* <div style={{ background: `rgba(0, 0, 0, 0.7)` }}> */}
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <h1 >{project?.title}</h1>
                            <div className="post-heading">
                                <h5>By {project?.teamname}</h5>
                                <span className="meta"><em>Issued on {new Date(project?.issuedon).toLocaleDateString()}</em></span>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </header>

            <Jumbotron fluid style={{ background: 'white', width: '100%', margin: 'auto', paddingBottom: '1rem' }}>
                <Container>
                    <h4>Description:</h4>
                    <p dangerouslySetInnerHTML={{ __html: project?.description }}></p>
                    <h4>Objective:</h4>
                    <p dangerouslySetInnerHTML={{ __html: project?.objective }}></p>
                    <p ><img src={project?.pic} /></p>
                    <h4>Project Status:</h4>
                    <p dangerouslySetInnerHTML={{ __html: project?.status }}></p>

                    <h4>Members:</h4>
                    <p> {project?.member.map(function (d, idx) {
                        return (<li key={idx}>{d.member}</li>)
                    })}</p>
                </Container>
                <hr />
            </Jumbotron>


        </div>
    )
}

export default SingleProject
