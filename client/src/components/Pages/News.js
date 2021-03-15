import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Container, Jumbotron } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import createHistory from "history/createBrowserHistory";
import Loading from "../../Animations/Loading";
import "../../css/news.css";

export default function News() {

  const [news, SetNews] = useState([]);
  const [eventKey, setEventKey] = useState("");

  useEffect(() => {
    document.title = `Updates | ${process.env.REACT_APP_BASE_TITLE}`;
    fetch(`${process.env.REACT_APP_SERVER}/api/news/public`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetNews(data));

    const history = createHistory();
    if (history.location.state && history.location.state.key && news.length) {
      setEventKey(history.location.state.key);
      scroll.scrollTo(
        document
          .getElementById(history.location.state.key)
          .getBoundingClientRect().top
      );
      let state = { ...history.location.state };
      delete state.key;
      history.replace({ ...history.location, state });
    }
  }, [news]);

  return (
    <>
      <Loading time={2} />
      <div>
        <div className="pagesg">
          <div className="overlayg">
            <div className="pageTitleg titleBoldg">Updates</div>
          </div>
        </div>
        <Jumbotron
          fluid
          style={{
            background: "white",
            width: "100%",
            margin: "auto",
            paddingBottom: "1rem",
          }}>
          <Container>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true" activeKey={eventKey}
              onSelect={(e) => setEventKey(e)}
              style={{ margin: "1.5rem" }}>
              {news.map((singleNews, i) => (
                <div className="panel panel-default" key={singleNews.id}
                  id={singleNews.id}
                  style={{ padding: "0.15rem" }}
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <div className="panel-heading" role="tab" id="headingOne"
                    eventKey={singleNews.id}
                    style={{ fontSize: "1.3rem" }}>
                    <h4 className="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#${i}`} aria-expanded="true" aria-controls={`${i}`} >
                        {/* <div> */}
                          {singleNews.title}
                          
                        {/* </div> */}
                      </a>
                    </h4>
                  </div>
                  <div id={`${i}`} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne"  eventKey={singleNews.id}>
                    <div className="panel-body" dangerouslySetInnerHTML={{ __html: singleNews.body }}></div>
                    <div className="panel-body">
                    <em
                            // className="float-right"
                            style={{ fontSize: "small" }}
                          >
                            --  {new Date(
                              singleNews.publishedAt
                            ).toLocaleDateString()}
                          </em>
                    </div>
                  </div>
                </div>
              ))}
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Collapsible Group Item #2
              </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Collapsible Group Item #3
              </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
                </div>
              </div>
            </div>



          </Container>
        </Jumbotron>


        {/* <Jumbotron
          fluid
          style={{
            background: "white",
            width: "100%",
            margin: "auto",
            paddingBottom: "1rem",
          }}
        >
          <Container>
            <div className="container" id="123456789">
              <Accordion
                activeKey={eventKey}
                onSelect={(e) => setEventKey(e)}
                style={{ margin: "1.5rem" }}
              >
                {news.map((singleNews) => (
                  <Card
                    key={singleNews.id}
                    id={singleNews.id}
                    style={{ padding: "0.15rem" }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <Card.Header style={{ cursor: "pointer" }}>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey={singleNews.id}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <div>
                          {singleNews.title}
                          <em
                            className="float-right"
                            style={{ fontSize: "small" }}
                          >
                            {new Date(
                              singleNews.publishedAt
                            ).toLocaleDateString()}
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
          </Container>
        </Jumbotron> */}
      </div>
    </>
  );
}
