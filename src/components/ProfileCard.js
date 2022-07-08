import React from 'react';
import '../styles/profile-card.scss'

const ProfileCard = () => {
    return (
        <div className='sidebar-grid-area'>
            <div className='profile-card'>
                <img className='profile-image' src="/images/profile.jpeg" />
                <hr className='profile-line-break'></hr>
                <h1 className='profile-text'><em>Software Engineer</em></h1>
            </div>
            
        </div>
    );

}

export default ProfileCard;