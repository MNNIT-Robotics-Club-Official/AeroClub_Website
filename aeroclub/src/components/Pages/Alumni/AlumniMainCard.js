import members from "./AlumniData";
import Member from "./AlumniMemberCard";



const MainCard = (props)=>{

        
    
    return(
      
        
        <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              className="accordion-toggle"
              data-toggle="collapse"
              data-parent="#accordion"
              href={"#collapse"+props.year}
              aria-expanded="false" aria-controls={'collapse'+props.year}
            >
              Batch {props.year}
            </a>
          </h4>
        </div>
        <div id={"collapse"+props.year} className="panel-collapse collapse">
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
    );
}

export default MainCard;


