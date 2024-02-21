// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LayoutWithSidebar from './components/Layout/SidebarLayout/LayoutWithSidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWithSidebar><HomePage /></LayoutWithSidebar>} />
        <Route path="/settings" element={<LayoutWithSidebar><SettingsPage /></LayoutWithSidebar>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
