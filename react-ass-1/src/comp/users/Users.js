// import User from './user/User
import 'bootstrap/dist/css/bootstrap.css';
import User from "../user/User";

function Users() {
    let a=[
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 4,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 5,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 6,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      ];
    return(
        <div>
            <h1>Users list</h1>
            {/* <div className=""> */}
            <div className="row row-cols-1 row-cols-2 row-cols-md-3 g-4">

            {
              a.map((d)=><User data={d}/>)
            }
            {/* <User data={a[0]}/>
            <User data={a[1]}/>
            <User data={a[2]}/>
            <User data={a[3]}/>
            <User data={a[4]}/>
            <User data={a[5]}/> */}
            {/* <User data={a[6]}/> */}
            
            </div>
        </div>
    );
}
export default Users;