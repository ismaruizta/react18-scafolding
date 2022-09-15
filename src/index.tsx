import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.esm';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import './index.css';

// paginas
import { Nav } from "./components/Navbar";
import { getRoutes } from './routes';

const routes = getRoutes();

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Nav></Nav>
      <div className="container">
        <div className="row">
        </div>
        <div className="row">
          <Routes>
            {routes.map((route: any) => {
              return (
                <Route key={route.path} path={route.path} element={<route.element />} />
              )
            })}
            <Route
              path="*"
              element={<Navigate to="/home" replace />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


    {/* <Nav></Nav> 
    <div className="container">
      <div className="row">
      </div>
      <div className="row">
        <RouterProvider router={router} />
      </div>
    </div> */}
  </React.StrictMode>
);
