import React from 'react';

const Header = () => {
    return (
        <header style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f0f0f0'
        }}>
            {/* Profile image */}
            <img 
                src="/me.jpeg" // Ensure the image is placed in the public/images folder
                alt="Profile"
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '100%', // Ensures responsiveness
                    height: 'auto', // Maintains aspect ratio
                }}
                className="profile-image"
            />
            <h1>My Achievements & Certifications</h1>
            <p style={{
                marginTop: '10px',
                fontSize: '16px',
                color: '#555'
            }}>
                Hi, I'm <strong>Abdikhafar Issack</strong>, a passionate <strong>Software Engineer</strong> dedicated to continuous learning and growth. Below are my achievements and certifications that highlight my journey in technology and professional development.
            </p>
        </header>
    );
};

export default Header;
