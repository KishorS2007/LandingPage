import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './Home';
import Login from './Login';
import About from './ABout';
import Error from './Error';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { HashRouter,Routes,Route } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     element:<Home/>,
//     path:"/",
//     errorElement:<Error/>
//   },
//   {
//     element:<About/>,
//     path:"/about",
//   },
//   {
//     element:<Login/>,
//     path:"/contact",
//   },
// ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Login/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </HashRouter>

  </StrictMode>,
)
