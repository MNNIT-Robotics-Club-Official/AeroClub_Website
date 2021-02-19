import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { baseURL } from "../../baseUtils"


export default function Dashprojects(props) {
  const [numInvites, setnumInvites] = useState(0)
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("inv" + props.r);
    fetch(`${baseURL}/api/my/invites`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setnumInvites(data.length)
      });
  }, [numInvites, props.r]);

  return (
    <div>
      <div className="container" style={{ minHeight: "60vh" }}>
        <Accordion>
          {projects.map((project) => {
            let badge;
            if (project.status === "Ongoing")
              badge = (
                <span class="badge badge-pill badge-warning">
                  {project.status}
                </span>
              );
            else if (project.status === "Completed")
              badge = (
                <span class="badge badge-pill badge-success">
                  {project.status}
                </span>
              );
            return (
              <Card key={project._id}>
                <Card.Header style={{ cursor: "pointer" }}>
                  <Accordion.Toggle as={Card.Header} eventKey={project._id}>
                    <div>
                      {project.title}
                      <em className="float-right">{badge}</em>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={project._id}>
                  <Card.Body>
                    <div className="p-3">
                      <div>
                        <div>Members</div>
                        <ul>
                          {project.members.map((member) => {
                            let badge;
                            if (member.accepted && member.leader) {
                              badge = <span>👑</span>;
                            } else if (member.accepted) {
                              badge = (
                                <span class="badge badge-pill badge-success">
                                  Member
                                </span>
                              );
                            } else {
                              if ((member.user._id === props.user._id)) {
                                badge = <LoadingButton projectId={project._id} numInvites={numInvites} setnumInvites={numInvites} setr={props.setr} r={props.r} />;
                              } else
                                badge = (
                                  <span class="badge badge-pill badge-warning">
                                    Invited
                                  </span>
                                );
                            }
                            return (
                              <li>
                                {member.user.name}
                                <em className="float-right">{badge}</em>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}

          {
            projects.length === 0 && <p className='text-center'>No invites available ...!</p>
          }

        </Accordion>
      </div>
    </div>
  );
}

function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);
  const [isdone, setDone] = useState(false);

  useEffect(() => {
    if (isLoading) {
      fetch(`${baseURL}/api/my/invites/accept/${props.projectId}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      }).then((res) => {
        setLoading(false);
        setDone(true);
        props.setr(props.r + 1);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isdone}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : isdone ? "Accepted" : "Accept"}
    </Button>
  );
}
