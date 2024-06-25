import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';
import App from './App'
import ErrorPage from './pages/Error';
import Board from './components/Board';
import SignUp from './pages/Signup';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path:"/profile",
    element:<Profile/>,
    errorElement: <ErrorPage />
  },
  {
    path:"/board",
    element:<Board/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/signup",
    element:<SignUp/>,
    errorElement:<ErrorPage/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
