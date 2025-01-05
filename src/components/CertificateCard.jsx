import React from 'react';
import Tilt from 'react-parallax-tilt';
import './CertificateCard.css';


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
        >
            <div
                style={{
                    width: '300px',
                    height: '220px',
                    border: '1px solid #ddd',
                    padding: '15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    background: '#fff',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: '10px auto',
                }}
                className="certificate-card"
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

                {/* Button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    <button
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            width: '100%',
                            maxWidth: '200px',
                            margin: '0 auto',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                    >
                        View Certificate
                    </button>
                </a>
            </div>
        </Tilt>
    );
};

export default CertificateCard;

