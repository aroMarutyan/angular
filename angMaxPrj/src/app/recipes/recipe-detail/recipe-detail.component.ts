import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
