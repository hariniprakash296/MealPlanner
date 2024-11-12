import { Recipe } from '@/types/recipe';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface RecipeListProps {
  recipes: Recipe[];
  isLoading: boolean;
}

export function RecipeList({ recipes, isLoading }: RecipeListProps) {
  if (isLoading) {
    return <div className="text-center text-white">Searching for recipes...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <Card key={recipe.title} className="bg-gray-800 hover:bg-gray-700 transition-colors">
          <CardHeader>
            <CardTitle className="text-xl text-white">{recipe.title}</CardTitle>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Time: {recipe.time}</p>
              <p className="text-sm text-gray-300">
                Difficulty: {'⭐'.repeat(recipe.difficulty)}
              </p>
              <CardDescription className="text-gray-400">
                {recipe.description}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}