import Home from "./pages/Home/Home";
import {useState , useEffect , useRef} from "react"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import Navbar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Login from "./pages/Login/Login";
import '../src/styles/global.scss'
import EditIUser from "./pages/Users/EditUser/EditIUser";

export interface DimensionWidth {
  width: number;
}
export interface DimensionHeight {
  height: number;
}
function App() {

  const [width, setWidth] = useState<DimensionWidth>({ width: window.innerWidth });

  const [menuHeight, setMenuHeight] = useState<DimensionHeight>({ height: 10});

 
  const handleWindowResize = () => {
    setWidth({ ...width, width: width.width });
  };

  useEffect(() => {
     window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, [])

  console.log(window.location.pathname)
  const Layout = () => {

    return (
      <div className="main" style={{
        minHeight: menuHeight.height < width.width ? '100vh' : `${menuHeight.height + 150}px`      }} >
        <Navbar/>
        <div className="container">
       {( window.location.pathname == "/users" && 768 >= width.width )  ? "" :
          <div className="menuContainer">
              <Menu menuHeight={menuHeight} setMenuHeight={setMenuHeight}/>
          </div>
       }   
          <div className="contentContainer" style={window.location.pathname === "/users" && 768 >= width.width ? { width: "100%" } : undefined} >
              <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )

  }


  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/> ,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Users",
          element: <Users/>,
        },
        {
          path: "/Users/1",
          element: <EditIUser/>,
        },
      ]
    },
    {
      path:'/login',
      element : <Login/>,
    }
  ]);
  return (
       <RouterProvider router={router} />
  )
}

export default App
