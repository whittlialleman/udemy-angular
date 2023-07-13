import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn: 'root'}) //alternative to putting this in the providers array in app.module
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://udemy-angular-f2c29-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('https://udemy-angular-f2c29-default-rtdb.firebaseio.com/recipes.json').subscribe(recipes => {
            this.recipeService.setRecipes(recipes);
        });
    }
}