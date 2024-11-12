/**
 * Path: recipe-app/app/page.tsx
 * 
 * Technical Flow:
 * 1. Main page component that handles recipe display and search
 * 2. Uses debounced search to query recipes via API
 * 3. Displays results in a responsive grid
 */
'use client';

import { useState, useCallback } from 'react';
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from '@/components/FilterBar';
import { RecipeList } from '@/components/RecipeList';
import { Recipe } from '@/types/recipe';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
});

export default function HomePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState('');

  const handleSearch = useCallback(async (query: string) => {
    if (!query || query === lastQuery) return;
    
    setIsLoading(true);
    setLastQuery(query);
    
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      
      if (response.ok) {
        setRecipes([data]);
      } else {
        console.error('Search failed:', data.error);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [lastQuery]);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-black text-white min-h-screen p-4" style={{ fontFamily: pacifico.style.fontFamily }}>
        <SearchBar onSearch={handleSearch} />
        <FilterBar />
        <RecipeList recipes={recipes} isLoading={isLoading} />
      </div>
    </main>
  );
}