import 'bootstrap/dist/css/bootstrap.css';
import './User.css'
function User(para){
    return(
    //     <div classNameName="card-body row-md-1 col-md-4">
    // <div classNameName="d-flex justify-content-center m-3 ">
    //     <div>
    //     <h6>{para.data.id}</h6>
    //     <img src={para.data.avatar} alt="" />
    //     <h6>{para.data.first_name} {para.data.last_name}</h6>
    //     <h6>{para.data.email}</h6>
    //     </div>
    // </div>
    // </div>
    // <div className="card w-25 m-5  justify-content-center align-items-center d-flex flex-wrap">
        <div>
        <img src={para.data.avatar} className="card-img-top p-3 rounded-5 img-fluid "  alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{para.data.first_name} {para.data.last_name}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{para.data.email}</li>
        </ul>
  </div>
    );
}
export default User;