import React from "react";
import '../css/Eventhome.css';
import { Navbar } from 'react-bootstrap';

class EventHome extends React.Component {
  render() {
    return (

      <div class="container-fluid">
        <div className="pages">
          <div className="jumbotron overlay">
            <div className="pageTitle titleBold">
              PROSANG
            </div>
            <div className="miniSep"></div>
            <p className="leftText pageTextCont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <div className="pageTitle titleBold">
              AVISHKAR
            </div>
            <div className="miniSep"></div>
            <p className="leftText pageTextCont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>

    )
  }
}

export default EventHome;