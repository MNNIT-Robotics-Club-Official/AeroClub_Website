import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { UserContext } from "../../UserProvider";

export default function Dashprojects(props) {
  const [numInvites, setnumInvites] = useState(0);
  const { state } = useContext(UserContext);

  return (
    <div>
      <div className="container" style={{ minHeight: "60vh" }}>
        <Accordion>
          {state?.projects?.map((project) => {
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
              <Card key={project.id}>
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
                              if (member.user._id === state?.id) {
                                badge = (
                                  <LoadingButton projectId={project._id} />
                                );
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

          {state?.projects?.length === 0 && (
            <p className="text-center">No invites available ...!</p>
          )}
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
      fetch(`/api/my/invites/accept/${props.projectId}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      }).then((res) => {
        setLoading(false);
        setDone(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...state,
            projects: [...state.projects, data],
          })
        );
        dispatch({
          type: "UPDATE_PROJ",
          payload: data.updatedProject,
        });
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
