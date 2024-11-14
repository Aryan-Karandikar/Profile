import React from 'react';
import profile from './Aryan.jpeg';

function ProfilePic() {
  return (
    <div className="profile-pic-container">
      <img src={profile} alt="Profile" className="profile-pic" />
    </div>
  );
}

export default ProfilePic;
