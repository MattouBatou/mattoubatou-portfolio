import React from "react";
import { createRoot } from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider
  } from "react-router-dom";

import Root from "routes/root";
import Project, { loader as projectLoader } from "routes/project";
import RouterError from 'components/Error/router-error';

import "./scss/main.scss";
import ListProjects from "components/Main/ListProjects";
import Content from "assets/data/content";

// Clear the existing HTML content
const adobeFontDiv = document.createElement('div');
adobeFontDiv.innerHTML = `<link rel="stylesheet" href="https://use.typekit.net/jfx1jng.css">`;
document.head.appendChild(adobeFontDiv);
document.body.innerHTML = '<div id="app"></div>';

const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <RouterError />,
      children: [{
        path: 'portfolio',
        element: <ListProjects contentCollection={Content}/>,
      },{
        path: 'portfolio/:contentId',
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
