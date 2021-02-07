import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";

export default function News() {
  const [news, SetNews] = useState([]);

  useEffect(() => {
    fetch("/api/news", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetNews(data));
  }, []);

  return (
    <div>
      <h1>News and Announcements</h1>
      <div className="container" style={{ minHeight: "60vh" }}>
        <Accordion>
          {news.map((singleNews) => (
            <Card key={singleNews.id}>
              <Card.Header style={{ cursor: "pointer" }}>
                <Accordion.Toggle as={Card.Header} eventKey={singleNews.id}>
                  <div>
                    {singleNews.title}
                    <em className="float-right">
                      published on
                      {new Date(singleNews.publishedAt).toLocaleDateString()}
                    </em>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={singleNews.id}>
                <Card.Body
                  dangerouslySetInnerHTML={{ __html: singleNews.body }}
                ></Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
