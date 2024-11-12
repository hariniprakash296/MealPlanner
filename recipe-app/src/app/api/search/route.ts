/**
 * Path: recipe-app/app/api/search/route.ts
 * 
 * Technical Flow:
 * 1. Handles POST requests for recipe searches
 * 2. Communicates with OpenAI API
 */

//import OpenAIApi from 'openai'
//import { NextResponse } from 'next/server'
//import { Recipe } from '@/types/recipe'

// ... rest of the code remains the same ...
// src/app/api/search/route.ts
import { NextResponse } from 'next/server';
import { searchRecipes } from '@/services/recipeService';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const recipe = await searchRecipes(query);
    return NextResponse.json(recipe);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Failed to search recipes' }, { status: 500 });
  }
}