import React from "react";
import FollowersList from "pages/FollowersList";
import TwitterFeed from "pages/TwitterFeed";
import ProfilePage from "pages/ProfilePage";
import FollowingList from "pages/FollowingList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TwitterFeed />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/followinglist" element={<FollowingList />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/followerslist" element={<FollowersList />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
