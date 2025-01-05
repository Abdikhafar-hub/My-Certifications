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
            <div className="certificate-card">
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
                <h3>{title}</h3>
                <p>{date}</p>

                {/* Button */}
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button>View Certificate</button>
                </a>
            </div>
        </Tilt>
    );
};

export default CertificateCard;
