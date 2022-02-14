import members from "./AlumniData";
import Member from "./AlumniMemberCard";



const MainCard = (props)=>{
    return(
      
            <div className="container alumni-container my-5 col-11" style={{ minHeight: '24rem' }}>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href={"#collapse"+props.year }
                  aria-expanded="true" 
                  aria-controls={"collapse"+props.year}
                >
                  Batch {props.year}{console.log("#collapse" + props.year)}
                </a>
              </h4>
            </div>
            <div id={"collapse"+props.year} className="panel-collapse collapse show">
              <div className="panel-body">
                <div className="fluid-container">
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === props.year && (
                          <Member aPhotoForWebsiteOfYourself={member.aPhotoForWebsiteOfYourself} 
                                  presentOrganisation={member.presentOrganisation}
                                  yourLinkedinId = {member.yourLinkedinId}
                                  name={member.name} />    
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default MainCard;