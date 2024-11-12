
/**
 * Path: recipe-app/src/components/SearchBar.tsx
 * 
 */
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mb-4 flex gap-2">
      <Input
        type="text"
        placeholder="What's cooking?"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full bg-gray-800 text-white"
        aria-label="Search recipes"
      />
      <Button 
        onClick={handleSearch}
        className="bg-gray-700 hover:bg-gray-600 text-white"
      >
        Search
      </Button>
    </div>
  );
}