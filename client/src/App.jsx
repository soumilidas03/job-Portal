import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);
function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
