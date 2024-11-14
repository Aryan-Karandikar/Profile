// ProfilePic.js
import React from 'react';
import profile from './Aryan.jpeg'; 

function ProfilePic() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img
        src={profile }
        alt="Profile"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
      <h3>Aryan Karandikar</h3>
    </div>
  );
}

export default ProfilePic;
