import Home from "./Pages/Home/Home";
import UsersList from "./Pages/Users/UsersList";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import ProductDetail from "./Pages/Products/ProductDetail";


let routes=[
    {path:'/' , element:<Home/>},
    {path:'/userslist' , element:<UsersList/>},
    {path:'/newuser' , element:<NewUser/>},
    {path:'/products' , element:<Products/>},
    {path:'/products/:productId' , element:<ProductDetail/>}
];
export default routes;