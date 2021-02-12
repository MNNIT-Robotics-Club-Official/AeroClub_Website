import React, { useEffect, useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Button, Container, Jumbotron } from 'react-bootstrap'

export default function Workshop() {
    const [workshops, SetWorkshops] = useState([]);

    useEffect(() => {
        fetch("/api/workshop", {
            method: "get",
        })
            .then((res) => res.json())
            .then((data) => SetWorkshops(data));
    }, []);

    useEffect(() => {
        fetch('/api/workshop', {
            method: 'get'
        }).then(res => res.json())
            .then(data => SetWorkshops(data))
    }, [])

    return (
        <div>

            <div className="pagesg">
                <div className="overlayg">
                    <div className="pageTitleg titleBoldg">
                        Workshops
                            </div>
                </div>
            </div>
            <Jumbotron fluid style={{ background: 'white', width: '100%', margin: 'auto', paddingBottom: '1rem' }}>
                <Container>
                    <div className='container' >

                        <Accordion>
                            {
                                workshops.map(singlews => (
                                    <Card key={singlews.id}>
                                        <Card.Header style={{ cursor: 'pointer' }}>
                                            <Accordion.Toggle as={Card.Header} eventKey={singlews.id}>
                                                <div>
                                                    {singlews.name}
                                                    <em className='float-right' style={{ fontSize: "10px" }}>-on 
                                                        
                                                            { new Date(singlews.date).toLocaleDateString()}
                                                        
                                                    </em>
                                                    <div dangerouslySetInnerHTML={{ __html: singlews.about}}>
                                                        
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={singlews.id}>
                                            <Card.Body dangerouslySetInnerHTML={{ __html: singlews.brochure }}></Card.Body>
                                            
                                        </Accordion.Collapse>
                                    </Card>
                                ))
                            }
                        </Accordion>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}
