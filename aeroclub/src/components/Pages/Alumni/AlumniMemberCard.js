const Member =(props)=>{
    return(
        <div
                            className="card card-item-1 shadow item-alumni"
                            style={{ width: "17rem", minHeight: '33rem', maxHeight: '33rem' }}
                            key={props.key}
                          >
                            <img
                              className="card-img-top card-alumni"
                              src={`${props.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                className="card-title text-center text-uppercase"
                                style={{ minHeight: "3rem" }}
                              >
                                {props.name}
                              </h5>
                              <p
                                className="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {props.presentOrganisation
                                  ? props.presentOrganisation
                                  : "Graduated Mechanical Engineer, MNNIT Allahabad"}
                              </p>

                              <div className="d-flex justify-content-center mt-4">
                                <a href={props.yourLinkedinId} target="_blank">
                                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>


    );
}

export default Member;