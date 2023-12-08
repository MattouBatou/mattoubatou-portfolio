import React from "react";
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Root from "routes/root";
import Project, { loader as projectLoader } from "routes/project";
import RouterError from 'components/Error/router-error';

import "./scss/main.scss";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <RouterError />,
      children: [{
        path: 'project/:contentId',
        element: <Project />,
        loader: projectLoader
      }]
    },
]);

// Render your React component instead
const root = createRoot(document.getElementById('app') as Element);
root.render((
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
));
