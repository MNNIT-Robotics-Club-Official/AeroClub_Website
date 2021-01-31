import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

export default function CompIssue() {
  const [components, setComponents] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("/api/component/filter", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponents(data);
        setTypes(Object.keys(components));
        console.log(components);
      });
  }, []);

  return (
    <Tabs defaultActiveKey={components[0]} id="uncontrolled-tab-example">
      {types.map((type) => {
        <Tab eventKey={type} title={type.toUpperCase()}>
            
        </Tab>
      })}
    </Tabs>
  );
}
