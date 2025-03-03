import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Router components
import App from './App';
import UserPage from './pages/UserPage';
import MainData from './pages/MainData';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/userPage",
        element: <UserPage />,
      },
      {
        index: true,
        element: <MainData />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />
      }
    ],
  },
  // {
  //   path: "/userPage",
  //   element: <UserPage />
  // },
  {
    path: "*",
    element: <p>404 - page not found</p>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
