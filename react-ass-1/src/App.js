import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './comp2/Home';
import Login from './comp2/Login';
import Root from './comp2/Root';
import Register from './comp2/Register';
import Achievements from './comp2/Achievements'
import AchiveUpload from './comp2/AchiveUpload';
import Collab from './comp2/Collab';
import Mentoring from './comp2/Mentoring';
import Home1 from './comp2/Home1';
import Item1 from './comp2/Item1';
import Item2 from './comp2/Item2';
function App() {

  let router=createBrowserRouter([
    {
      path:"",
      element:<Root/>,
      // errorElement:<Error/>,
      children:[
        {
          path:'',
          element:<Home1 />
        },
        {
          path:'Home',
          element:<Home />
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:"login",
          element:<Login />
        },
        {
          path:"Achievements",
          element:<Achievements></Achievements>,
          children:[
            {
              path:"upload",
              element:<AchiveUpload></AchiveUpload>
            }
          ]
        },
        {
          path:"collab",
          element:<Collab></Collab>
        },
        {
          path:"mentor",
          element:<Mentoring></Mentoring>
        },
        {
          path:"item1",
          element:<Item1></Item1>
        }
        ,
        {
          path:"item2",
          element:<Item2></Item2>
        }
  ]}
  ])
  return (
    <div>
      {/* provide BrowserRouter obj to application */}
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
