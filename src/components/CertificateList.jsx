import React from 'react';
import CertificateCard from './CertificateCard';
import certificates from '../data/certificates';

const CertificateList = () => {
    return (
        <div
            style={{
                display: 'grid',
                gap: '20px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                justifyContent: 'center', // Center-align the cards
                padding: '20px',
            }}
        >
            {certificates.map((cert, index) => (
                <CertificateCard
                    key={index}
                    title={cert.title}
                    link={cert.link}
                    date={cert.date}
                    logo={cert.logo}
                />
            ))}
        </div>
    );
};

export default CertificateList;
