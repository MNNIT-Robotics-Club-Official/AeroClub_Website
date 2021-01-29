import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Jumbotron } from 'react-bootstrap';
import Loading from '../../Animations/Loading';
import '../../css/featured-proj.css';
import '../../css/Gallery.css';

function Projects() {

    const [projects, SetProjects] = useState([])

    useEffect(() => {
        fetch('/api/projects', {
            method: 'get'
        }).then(res => res.json())
            .then(data => SetProjects(data))
    }, [])

    return (
        
        <div className="cont">
        <div className=" pagesg">
                    <div className="overlayg">
                        <div className="pageTitleg titleBoldg">
                            PROJECTS
                            </div>
                    </div>
                </div>
            <div className="main">
            
                <ul className="cards">
                    <Loading />

                    {

                        projects?.map(project => (


                            <li className="cards_item">
                                <div className="card">
                                    <div className="card_image"><img src={project.pic} /></div>
                                    <div className="card_content">
                                        <h2 className="card_title" style={{fontSize:23}}>{project.title}</h2>
                                        <p className="card_text" style={{marginTop:0, marginBottom:0}}>By {project.teamname}</p>
                                        <p className="card_text" style={{marginTop:0, marginBottom:0}}>Project Status : {project.status}</p>
                                        <p className="card_text" style={{marginTop:0, marginBottom:0}}>Issued on {new Date(project.issuedon).toDateString()}</p>

                                        <Button className="btns card_btns" href={`projects/${project.id}`} style={{marginTop:10}}>Read More</Button>
                                    </div>
                                </div>
                            </li>


                        ))

                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects;