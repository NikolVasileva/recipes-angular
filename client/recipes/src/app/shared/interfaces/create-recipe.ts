export interface CreateRecipe {
    _createdOn: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    ingredients: string;
    cookTime: number;
    servings: number;
    difficulty: string;
  }