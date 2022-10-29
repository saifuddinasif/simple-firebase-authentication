import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {


  // const router = createBrowserRouter([

  
  //     {
  //       path : '/',

  //       element : <Main></Main>,

  //       children: [

  //     {   
  //        path : '/login',

  //         element : <Login></Login>,
        
        
  //       },
  //       {    path : '/register',

  //       element : <Register></Register>,
      
      
  //     }


  //       ]
  //     }

  // ])

  return (
   <div>
    <RouterProvider router={routes}>

    </RouterProvider>

    </div>
  );
}

export default App;
