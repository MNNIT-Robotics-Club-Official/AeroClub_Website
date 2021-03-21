import React, { useEffect, useState } from "react";
import Loading from "../../Animations/Loading";
import "../../css/news.css";
import '../../css/Achievements.css'
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function Achievements() {
  const [data, setData] = useState([]);
  document.title = `Achievements | ${REACT_APP_BASE_TITLE}`;
  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/achievement/year`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Our Achievements</div>
        </div>
      </div>

      <div className="container achievements-container col-11 col-9">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          {data.map(datum => (
            <div className="panel panel-default my-4" key={datum._id}>
              <div className="panel-heading" >
                <h4 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${datum._id}`} aria-expanded="true" aria-controls={`collapse${datum._id}`} >
                    {datum._id < 2017
                      ? "Before 2017"
                      : `${datum._id}-${datum._id - 1999}`}
                  </a>
                </h4>
              </div>
              <div id={`collapse${datum._id}`} className="panel-collapse collapse show in" role="tabpanel" aria-labelledby={`${datum._id}`}>
                <div className="panel-body py-3">
                  {datum.achievements.map((achievement) => (

                    <div class="card mx-2 my-2 rounded" key={achievement._id}>
                      <div class="card-body">
                        <div
                          className="text-center desc"
                          dangerouslySetInnerHTML={{
                            __html: achievement.desc,
                          }}
                        ></div>
                        <div
                          className="mt-4 text-center"
                          style={{ color: 'black' }}
                        >
                          <p className="font-weight-bold d-inline">
                            TEAM MEMBERS :{" "}
                          </p>
                          {achievement.team.map((member, i) => (
                            <p className="d-inline team" key={i}>
                              {
                                <>{
                                  member.lurl ?
                                    <a href={member.lurl} target="_blank">{member.name} </a>
                                    : member.name
                                }
                                  {i !== achievement.team.length - 1 ? ', ' : null}
                                </>
                              }
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
