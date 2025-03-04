import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Router components
import App from './App';
import UserPage from './pages/UserPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import { LoginView } from './pages/LoginView';
import { Register } from './pages/Register';
import Cart from './pages/Cart';
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
        path: "/login",
        element: <LoginView />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />
      },
      {
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/cart",
        element: <Cart />
      },
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

reportWebVitals();
