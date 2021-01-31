import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import CompCard from "./CompCard";

export default function CompIssue() {
  const [components, setComponents] = useState({});
  const [types, setTypes] = useState([]);
  const [key, setKey] = useState("electronics");

  useEffect(() => {
    fetch("/api/component/filter", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponents(data);
      });
      setTypes(Object.keys(components));
  }, []);

  return (
    <>
      <Loading />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {types.map((type) => (
          <Tab
            eventKey={type}
            title={type}
            style={{ display: "flex", flexWrap: "wrap" }}
            key={type}
          >
            {components[type].map((comp) => (
              <CompCard comp={comp}/>
            ))}
          </Tab>
        ))}
      </Tabs>
    </>
  );
}
