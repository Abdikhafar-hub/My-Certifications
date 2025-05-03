
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchAndFilter from '../components/SearchAndFilter';
import CertificationsGrid from '../components/CertificationsGrid';
import certificates from '../data/certificates';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">My Certifications</h2>
            <p className="text-gray-600">
              A showcase of my professional certifications and achievements in software
              engineering, cybersecurity, and related fields.
            </p>
          </div>
          
          <SearchAndFilter 
            certificates={certificates}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          
          <CertificationsGrid 
            certificates={certificates}
            selectedCategory={selectedCategory}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
