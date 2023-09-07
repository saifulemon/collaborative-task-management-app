import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  }, 
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
