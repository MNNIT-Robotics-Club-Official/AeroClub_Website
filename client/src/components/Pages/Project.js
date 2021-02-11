import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import baseURL from "../../baseURL"
import Loading from '../../Animations/Loading';
import '../../css/featured-proj.css';
// import '../../css/Gallery.css';

function Projects() {

    const [projects, SetProjects] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/api/projects/approved`, {
            method: 'get'
        }).then(res => res.json())
            .then(data => {console.log(data) ;return SetProjects(data)})
    }, [])

    const [page, SetPage] = useState(1)
    const projects_per_page = 6
    const no_of_pages = Math.ceil(projects.length / projects_per_page)

    return (

        <div className="cont">
            <div className=" pagesg">
                <div className="overlayg">
                    <div className="pageTitleg titleBoldg">
                        PROJECTS
                            </div>
                </div>
            </div>
            <div className="main" style={{ overflow: 'hidden' }}>

                <ul className="cards">
                    <Loading time={2} />
                    {
                        projects.slice((page - 1) * projects_per_page, page * projects_per_page).map(project => (
                            <li className="cards_item">
                                <div className="card cardproj">
                                    <div className="card_image"><img src={project.pic} /></div>
                                    <div className="card_content">
                                        <h2 className="card_title" style={{ fontSize: 23 }}>{project.title}</h2>
                                        <p className="card_text" style={{ marginTop: 0, marginBottom: 0 }}>By {project.teamname}</p>
                                        <p className="card_text" style={{ marginTop: 0, marginBottom: 0 }}>Project Status : {project.status}</p>
                                        <p className="card_text" style={{ marginTop: 0, marginBottom: 0 }}>Issued on {new Date(project.issuedon).toDateString()}</p>

                                        <Button className="btns card_btns" href={`projects/${project._id}`} style={{ marginTop: 10 }}>Read More</Button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className='float-right mr-5 mb-3 mt-5'>
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
    )
}

export default Projects;