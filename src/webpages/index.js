import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './home';
import User from './user';
const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path = "/user" element={<User />} />
            </Routes>
        </Router>
    );
};
export default Webpages;