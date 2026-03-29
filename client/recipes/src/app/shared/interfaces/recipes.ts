export interface Recipe {
  _id: string;
  _createdOn: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  ingredients: string;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  _ownerId: string;
}