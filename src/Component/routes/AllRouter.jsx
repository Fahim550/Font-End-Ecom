import Login from "../Login";
import SignIn from "../SignIn";
import Home from "../home/Home";


export const allRouters=[
// {
//     path:'/',
//     element:<Home/>
// },
{
    path:"/home",
    element:<Home/>
},
{
    path:"/login",
    element:<Login/>
},
{
    path:"/signin",
    element:<SignIn/>
},
]