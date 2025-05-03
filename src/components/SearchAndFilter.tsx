
import React, { useMemo } from 'react';
import { Certificate } from '../data/certificates';

interface SearchAndFilterProps {
  certificates: Certificate[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const SearchAndFilter = ({
  certificates,
  selectedCategory,
  setSelectedCategory,
}: SearchAndFilterProps) => {
  // Extract unique categories from certificates
  const categories = useMemo(() => {
    const uniqueCategories = new Set(certificates.map(cert => cert.category || 'Other'));
    return ['All', ...Array.from(uniqueCategories)];
  }, [certificates]);

  return (
    <div className="mb-8">
      <div className="flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple bg-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
