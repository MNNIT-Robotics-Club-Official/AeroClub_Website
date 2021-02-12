import React, { useEffect, useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Container, Jumbotron } from 'react-bootstrap'
import { animateScroll as scroll } from 'react-scroll'
import createHistory from 'history/createBrowserHistory'

export default function News() {
    const [news, SetNews] = useState([]);
    const [eventKey, setEventKey] = useState('')

    useEffect(() => {

        fetch("/api/news", {
            method: "get",
        })
            .then((res) => res.json())
            .then((data) => SetNews(data));

        const history = createHistory()
        if (history.location.state && history.location.state.key && news.length) {
            setEventKey(history.location.state.key)
            console.log(document.getElementById(history.location.state.key).clientTop)
            scroll.scrollTo(document.getElementById(history.location.state.key).getBoundingClientRect().top - 56)
            let state = { ...history.location.state };
            delete state.key;
            history.replace({ ...history.location, state });
        }

    }, [news]);

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
                    <div className='container' id='123456789'>
                        <Accordion activeKey={eventKey} onSelect={e => setEventKey(e)}>
                            {
                                news.map(singleNews => (
                                    <Card key={singleNews.id} id={singleNews.id}>
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
