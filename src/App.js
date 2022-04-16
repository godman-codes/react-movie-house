import React from "react";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/Notfound";
import Login from "./components/Login";
import Logout from "./components/Logout";
import MyLocation from "./components/MyLocation";
//Context
import UserProvider from "./Context";
// styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
   <Router>
      <UserProvider>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/:movieId" element={<Movie />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/location" element={<MyLocation />} />
         </Routes>
         <GlobalStyle />
      </UserProvider>
   </Router>
);
export default App;
