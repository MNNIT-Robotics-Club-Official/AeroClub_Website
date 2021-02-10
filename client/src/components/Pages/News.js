import React, { useEffect, useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Button, Container, Jumbotron } from 'react-bootstrap'

export default function News() {
    const [news, SetNews] = useState([]);

    useEffect(() => {
        fetch("/api/news", {
            method: "get",
        })
            .then((res) => res.json())
            .then((data) => SetNews(data));
    }, []);

    useEffect(() => {
        fetch('/api/news', {
            method: 'get'
        }).then(res => res.json())
            .then(data => SetNews(data))
    }, [])

    return (
        <div>

            <div className="pagesg">
                <div className="overlayg">
                    <div className="pageTitleg titleBoldg">
                        Updates
                            </div>
                </div>
            </div>
            <Jumbotron fluid style={{ background: 'white', width: '100%', margin: 'auto', paddingBottom: '1rem' }}>
                <Container>
                    <div className='container' >

                        <Accordion>
                            {
                                news.map(singleNews => (
                                    <Card key={singleNews.id}>
                                        <Card.Header style={{ cursor: 'pointer' }}>
                                            <Accordion.Toggle as={Card.Header} eventKey={singleNews.id}>
                                                <div>
                                                    {singleNews.title}
                                                    <em className='float-right'>published on
                                                {
                                                            new Date(singleNews.publishedAt).toLocaleDateString()
                                                        }
                                                    </em>
                                                </div>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={singleNews.id}>
                                            <Card.Body dangerouslySetInnerHTML={{ __html: singleNews.body }}></Card.Body>
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
