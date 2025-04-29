
import React, { useState, useEffect } from 'react';
import CertificationCard from './CertificationCard';
import { Certificate } from '../data/certificates';

interface CertificationsGridProps {
  certificates: Certificate[];
  searchQuery: string;
  selectedCategory: string;
  sortOrder: 'asc' | 'desc';
}

const CertificationsGrid = ({ 
  certificates,
  searchQuery,
  selectedCategory,
  sortOrder
}: CertificationsGridProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter certificates based on search query and category
  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort certificates based on date
  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    return sortOrder === 'asc' 
      ? dateA.getTime() - dateB.getTime() 
      : dateB.getTime() - dateA.getTime();
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="animate-pulse p-6 rounded-xl bg-white shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-gray-200"></div>
              <div className="h-5 w-5 rounded-full bg-gray-200"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-4 w-1/3"></div>
            <div className="flex justify-between items-center">
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (sortedCertificates.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-medium text-gray-500">No certifications found</h3>
        <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sortedCertificates.map((certificate, index) => (
        <CertificationCard 
          key={certificate.title} 
          certificate={certificate} 
          index={index}
        />
      ))}
    </div>
  );
};

export default CertificationsGrid;
