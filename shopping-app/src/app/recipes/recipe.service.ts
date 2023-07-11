import { EventEmitter, Injectable } from '@angular/core'

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shipping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'German schnitzel dish', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),

        new Recipe('Cheeseburger', 'Traditional American cheeseburger', 'https://cdn.pixabay.com/photo/2023/03/03/02/27/food-7826772_1280.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}