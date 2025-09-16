import React from 'react';
import './Profile.css';

function Profile() {
  // Placeholder user data
  const user = {
    username: 'Artorias',
    email: 'artorias@example.com',
    profilePicture: 'https://via.placeholder.com/150' // Placeholder image URL
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
      <div className="profile-body">
        <h3>Account Information</h3>
        <div className="info-group">
          <label>Username</label>
          <p>{user.username}</p>
        </div>
        <div className="info-group">
          <label>Email</label>
          <p>{user.email}</p>
        </div>
        <div className="info-group">
          <label>Password</label>
          <p>********</p>
        </div>
      </div>
      <div className="profile-footer">
        <button className="btn-edit">Edit Profile</button>
        <button className="btn-password">Change Password</button>
      </div>
    </div>
  );
}

export default Profile;