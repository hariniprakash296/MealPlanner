import { Recipe } from '@/types/recipe';

// Mock recipe database with categorized recipes
const mockRecipes: { [key: string]: Recipe } = {
  // Desserts
  'lemon tart': {
    title: "Classic Lemon Tart",
    time: "1h 30m",
    difficulty: 4,
    description: "A tangy French dessert with buttery pastry and creamy lemon filling."
  },
  'chocolate cake': {
    title: "Dark Chocolate Cake",
    time: "1h 15m",
    difficulty: 3,
    description: "Rich, moist chocolate cake with ganache frosting."
  },
  'tiramisu': {
    title: "Italian Tiramisu",
    time: "4h",
    difficulty: 3,
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream."
  },

  // Quick Meals
  'pasta': {
    title: "Quick Garlic Pasta",
    time: "20m",
    difficulty: 2,
    description: "Simple pasta with garlic, olive oil, and parmesan cheese."
  },
  'stir fry': {
    title: "Vegetable Stir Fry",
    time: "25m",
    difficulty: 2,
    description: "Quick and healthy vegetable stir fry with soy sauce."
  },
  'omelette': {
    title: "Classic French Omelette",
    time: "15m",
    difficulty: 3,
    description: "Perfectly folded omelette with herbs and cheese."
  },

  // Main Courses
  'chicken': {
    title: "Herb Roasted Chicken",
    time: "1h 45m",
    difficulty: 3,
    description: "Juicy roasted chicken with fresh herbs and root vegetables."
  },
  'salmon': {
    title: "Baked Salmon",
    time: "30m",
    difficulty: 2,
    description: "Tender baked salmon with lemon and dill."
  },
  'beef stew': {
    title: "Hearty Beef Stew",
    time: "2h 30m",
    difficulty: 3,
    description: "Rich beef stew with vegetables and red wine sauce."
  },

  // Vegetarian
  'mushroom risotto': {
    title: "Mushroom Risotto",
    time: "45m",
    difficulty: 4,
    description: "Creamy Italian risotto with wild mushrooms and parmesan."
  },
  'veggie burger': {
    title: "Black Bean Burger",
    time: "40m",
    difficulty: 2,
    description: "Homemade vegetarian burger with black beans and spices."
  },
  'ratatouille': {
    title: "Provençal Ratatouille",
    time: "1h",
    difficulty: 3,
    description: "Classic French vegetable stew with Mediterranean flavors."
  },

  // Breakfast
  'pancakes': {
    title: "Fluffy Pancakes",
    time: "25m",
    difficulty: 2,
    description: "Light and fluffy pancakes with maple syrup."
  },
  'granola': {
    title: "Homemade Granola",
    time: "45m",
    difficulty: 1,
    description: "Crunchy granola with nuts, seeds, and dried fruits."
  },
  'breakfast burrito': {
    title: "Breakfast Burrito",
    time: "30m",
    difficulty: 2,
    description: "Hearty breakfast burrito with eggs, cheese, and vegetables."
  },

  // Baking
  'bread': {
    title: "Artisan Bread",
    time: "3h",
    difficulty: 4,
    description: "Crusty homemade bread with a chewy interior."
  },
  'cookies': {
    title: "Chocolate Chip Cookies",
    time: "30m",
    difficulty: 2,
    description: "Classic chocolate chip cookies with crispy edges and soft centers."
  },
  'pizza': {
    title: "Homemade Pizza",
    time: "1h 30m",
    difficulty: 3,
    description: "Fresh pizza with homemade dough and your favorite toppings."
  }
};

export async function searchRecipes(query: string): Promise<Recipe> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const searchTerm = query.toLowerCase().trim();

  // Check for exact matches
  if (mockRecipes[searchTerm]) {
    return mockRecipes[searchTerm];
  }

  // Check for partial matches
  for (const [key, recipe] of Object.entries(mockRecipes)) {
    if (searchTerm.includes(key) || key.includes(searchTerm)) {
      return recipe;
    }
  }

  // Generate a random recipe if no match found
  return {
    title: `Recipe for ${query}`,
    time: `${Math.floor(Math.random() * 60) + 15}m`,
    difficulty: Math.floor(Math.random() * 5) + 1,
    description: `A creative dish featuring ${query} with seasonal ingredients and fresh flavors.`
  };
}

// Keep the real implementation commented out for later use
/*
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function searchRecipes(query: string): Promise<Recipe> {
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `Generate a recipe based on: ${query}...`,
    max_tokens: 500,
    temperature: 0.7,
  });

  const responseText = completion.choices[0]?.text || '';
  return JSON.parse(responseText);
}
*/