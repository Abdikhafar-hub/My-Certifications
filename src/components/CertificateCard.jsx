import React from 'react';
import Tilt from 'react-parallax-tilt';

const CertificateCard = ({ title, link, date, logo }) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffffff"
            glarePosition="bottom"
            scale={1.05}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={450}
            style={{ height: '100%' }}
        >
            <div
                style={{
                    width: '300px', // Fixed width
                    height: '220px', // Fixed height
                    border: '1px solid #ddd',
                    padding: '15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    background: '#fff',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Ensures spacing within the card
                }}
            >
                {/* Logo */}
                <img
                    src={logo}
                    alt={`${title} logo`}
                    style={{
                        maxWidth: '80px',
                        height: 'auto',
                        marginBottom: '10px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
                <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>{date}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}
                >
                    View Certificate
                </a>
            </div>
        </Tilt>
    );
};

export default CertificateCard;
