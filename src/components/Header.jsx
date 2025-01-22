import React from 'react';

const Header = () => {
    return (
        <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
            {/* Profile image */}
            <img 
                src="src/assets/me.jpeg"  // Replace with your image URL
                alt="Profile"
                style={{
                    width: '120px',  // Adjust the size as needed
                    height: '120px',
                    borderRadius: '50%', // This makes the image rounded
                    objectFit: 'cover', // Ensures the image covers the area properly
                    marginBottom: '20px' // Space between image and text
                }}
            />
            <h1>My Achievements & Certifications</h1>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
                Hi, I'm <strong>Abdikhafar Issack</strong>, a passionate <strong>Software Engineer</strong> dedicated to continuous learning and growth. Below are my achievements and certifications that highlight my journey in technology and professional development.
            </p>
        </header>
    );
};

export default Header;
