import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import PostPage from "./pages/PostPage/PostPage";
import UserProfile from "./pages/UserProfile/UserProfile";



const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("auth"));

  useEffect(() => {
    const handleAuthChange = () => {
      setAuth(localStorage.getItem("auth"));
    };

    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/blog-details/:id" element={<DetailsPage />} />
        <Route
          path="/user-details"
          element={ <UserProfile />}
        />
        <Route
          path="/login"
          element={auth ? <HomePage /> : <LoginPage />}
        ></Route>
        <Route
          path="/register"
          element={auth ? <HomePage /> : <RegisterPage />}
        />
      </Routes>
    </>
  );
};

export default App;
