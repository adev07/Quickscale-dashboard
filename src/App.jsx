import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "layouts/admin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="admin/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
};

export default App;
