import Main from "../layout/Main"
import About from "../pages/About/About"
import ConTactPage from "../pages/Contact"
import Home from "../pages/Home/Home"
import Videos from "../pages/Videos"


const { createBrowserRouter } = require("react-router-dom")

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/home',
            element: <Home></Home>
          },
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: '/videos',
            element: <Videos></Videos>
          },
          {
            path: '/contact',
            element: <ConTactPage></ConTactPage>
          }

        ]
    
    },
    
        
    
])