import React from 'react';
import ProfilePic from './profilepic';

const Profile = () => {
  const user = {
    name: "Aryan",
    email: "aryan@example.com",
    age: 20,
    location: "Mumbai, Bandra",
    bio: "App Developer with a passion for creating interactive applications.",
    hobbies: "Swimming, Coding, Carrom",
  };

  return (
    <section id="profile" className="section-container">
      <h2>About</h2>
      <ProfilePic />
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Hobbies:</strong> {user.hobbies}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </section>
  );
}

export default Profile;
