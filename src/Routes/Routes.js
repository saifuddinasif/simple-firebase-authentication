import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from './../Main/Main';






 export const routes =createBrowserRouter([  

    {
        path : '/',
    
        element: <Main></Main>,
    


        children :[
         {
            path : '/login',
            
            element: <Login></Login> ,
   
     
         },
         {
            path : '/register',
            
            element: <Register></Register> ,
   
     
         },
              
    
        ]
       }

])