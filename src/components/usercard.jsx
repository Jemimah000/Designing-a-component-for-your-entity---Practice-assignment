import React from "react";
import profilePic from '../assets/image.png';
function usercard(){
    const user = {
        profilePic : profilePic,
        name : "Manuel Jemimah Mary",
        email : "jemimahmarymanuel@gmail.com",
        phone : "8125414142",
        address : "Anand Gokulam, Teacher's layout, 301, Kommadi Rd, Gandhi Nagar,\nMadhurawada, Visakhapatnam, Andhra Pradesh 530048"
    };
    return(
        <div className="card">
            <img src={user.profilePic} alt="Profile" className="profile-pic"/>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>Phone:</strong>{user.phone}</p>
            <p className="address"><strong>Address:</strong>{user.address}</p>
        </div>
    );
}
export default usercard;