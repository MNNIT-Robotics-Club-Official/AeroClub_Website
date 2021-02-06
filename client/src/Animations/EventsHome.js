import React, { useEffect, useState } from 'react';
import '../css/Eventhome.css';
import { Accordion, Card } from 'react-bootstrap';

export default function EventHome() {

  const [news, SetNews] = useState([])

  useEffect(() => {
    fetch('/api/news', {
      method: 'get'
    }).then(res => res.json())
      .then(data => SetNews(data))
  }, [])
  return (

    <div class="container-fluid">
      <div className="pages">
        <div className="jumbotron overlay">
          <div className="pageTitle titleBold">
            Updates
            </div>
          <div className="miniSep"></div>
          <div className='containernews leftText pageTextCont' style={{background: 'transparent'}}>

            <Accordion style={{background: 'transparent'}}>
              {
                news.map(singleNews => (
                  <Card key={singleNews.id} style={{background: 'transparent'}}>
                    <Card.Header className="card-cont" style={{ cursor: 'pointer'}}>
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
                      <Card.Body dangerouslySetInnerHTML={{ __html: singleNews.body }} style={{color: 'white'}}></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))
              }
            </Accordion>
          </div>

        </div>
      </div>
    </div>

  )
}
