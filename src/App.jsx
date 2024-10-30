import { RouterProvider } from "react-router-dom";
import createRouter from "./Router";
import React, { useState } from 'react';

function App() {
  const [refreshProfile, setRefreshProfile] = useState(false);
  const toggleProfileRefresh = () => setRefreshProfile(prev => !prev);
  const router = createRouter(refreshProfile, toggleProfileRefresh);

  return <RouterProvider router={router} />;

}

export default App
