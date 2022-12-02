// import logo from "./logo.svg";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllWork from "./pages/AllWork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/allWork", element: <AllWork /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
