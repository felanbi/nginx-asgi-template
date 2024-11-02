import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const items = [
  { label: "Login", icon: "pi pi-fw pi-home" },
  { label: "Register", icon: "pi pi-fw pi-calendar" },
];

const App = () => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Header items={items} />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
