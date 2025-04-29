
import React from 'react';
import { Badge } from 'lucide-react';
import { Certificate } from '../data/certificates';
import { cn } from '@/lib/utils';

interface CertificationCardProps {
  certificate: Certificate;
  index: number;
}

const CertificationCard = ({ certificate, index }: CertificationCardProps) => {
  const animationDelay = `animate-delay-${(index % 5) * 100}`;

  return (
    <div 
      className={cn(
        "cert-card opacity-0 animate-fade-in-up p-6 rounded-xl bg-white shadow-md border border-gray-100", 
        animationDelay
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="h-12 w-12 rounded-lg overflow-hidden bg-white p-1 shadow-sm">
          <img 
            src={certificate.logo} 
            alt={`${certificate.title} logo`}
            className="cert-logo h-full w-full object-contain"
          />
        </div>
        <Badge className="h-5 w-5 text-brand-purple" />
      </div>
      <h3 className="font-medium text-lg mb-2 line-clamp-2">{certificate.title}</h3>
      <p className="text-sm text-gray-500 mb-4">Issued: {certificate.date}</p>
      
      <div className="flex justify-between items-center">
        {certificate.category && (
          <span className="text-xs px-3 py-1 bg-brand-light-purple/30 text-brand-purple rounded-full">
            {certificate.category}
          </span>
        )}
        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-brand-blue hover:text-brand-purple transition-colors"
        >
          View Certificate →
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
