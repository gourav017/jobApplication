import React from "react";
import { Route, Routes } from "react-router-dom";
import Joblist from "./Joblist";
import PosttheJob from "./PosttheJob";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/jobs" element={<Joblist />} />
      <Route path="/postthejob" element={<PosttheJob/>} />
    </Routes>
  );
};

export default AllRoutes;
