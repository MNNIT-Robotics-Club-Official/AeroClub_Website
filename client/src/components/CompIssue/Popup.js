import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Popup(props) {
  const [num, setnum] = useState(0);
  const [reason, setreason] = useState("");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`Requesting ${props.comp.name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex" }}>
          <img src={props.comp.image_url} fluid />
          <div>
            <div>
              Total quantity: {props.comp.available + props.comp.issued}
            </div>
            <div>In Stock: {props.comp.available}</div>
            <div>Issued: {props.comp.issued}</div>
            <Button onClick={() => (num > 0 ? setnum(num - 1) : 0)}>-</Button>
            <span>{num}</span>
            <Button
              onClick={() => (num < props.comp.available ? setnum(num + 1) : 0)}
            >
              +
            </Button>
            <div>
              <input
                type="text"
                value={reason}
                onChange={(event) => {
                  setreason(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <LoadingButton
          id={props.comp._id}
          body={{ num: num, reason: reason }}
          onHide={props.onHide}
        >
          Issue
        </LoadingButton>
        <Button
          onClick={() => {
            props.onHide();
            setnum(0);
            setreason("");
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      fetch(`/api/issue/${props.id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(props.body),
      }).then((res) => {
        console.log(res);
        setLoading(false);
        props.onHide();
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Confirm"}
    </Button>
  );
}
