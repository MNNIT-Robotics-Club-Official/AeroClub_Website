import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

export default function DashNews() {
  const [news, setnews] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/api/news/private`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => {
        if (res.status != 200) {
          localStorage.removeItem("jwtToken");
          toast.warn("Error");
          history.push("/user/login");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setnews(data);
      });
  });
  return (
    <div>
      <table
        style={{
          fontFamily: "arial, sans-serif",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tr>
          <th>title</th>
          <th>body</th>
          <th>publishedAt</th>
        </tr>
        {news.map((n) => (
          <tr>
            <td>{n.title}</td>
            <td dangerouslySetInnerHTML={{ __html: n.body }}></td>
            <td>{new Date(n.publishedAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
