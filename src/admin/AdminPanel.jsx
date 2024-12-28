// src/Pages/AdminPanel.jsx
import React from 'react';

function AdminPanel() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Panel</h2>
      <p>Welcome to the Admin Panel! Here you can manage announcements, services, and more.</p>

      <div>
        <h3>Manage Announcements</h3>
        <p>Here you can add, edit, or delete announcements.</p>
      </div>
      
      <div className="mt-4">
        <h3>Manage Services</h3>
        <p>Here you can add, edit, or delete services.</p>
      </div>
    </div>
  );
}

export default AdminPanel;
