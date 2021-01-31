import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Popup from "./Popup";

export default function CompCard(props) {
  const comp = props.comp;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div style={{}}>
      <p>{comp.name}</p>
      <div style={{ display: "flex" }}>
        <img src={comp.image_url} fluid />
        <div>
          <div>Total quantity: {comp.available + comp.issued}</div>
          <div>In Stock: {comp.available}</div>
          <div>Issued: {comp.issued}</div>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Request
          </Button>

          <Popup
            show={modalShow}
            onHide={() => setModalShow(false)}
            comp={comp}
          />
          
        </div>
      </div>
    </div>
  );
}


