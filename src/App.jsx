import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import ViewPaste from "./components/ViewPaste";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import PastebinHome from "./components/PastebinHome.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./features/userSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <PastebinHome />
        </>
      ),
    },
    {
      path: "/createPaste/:userId",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path:"/updatePaste/:pasteId",
      element:(
        <>
        <Navbar/>
        <Home/>
        </>
      )
    },
    { path: "/login", element: <Login /> },
    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/pastes",
      element: (
        <>
          <Navbar />
          <Pastes />
        </>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <>
          <Navbar />
          <ViewPaste />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
