import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./index.css";
import App from "./App.tsx";

const routes = createRoutesFromElements(
  <Route>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>
);

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
);
