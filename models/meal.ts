class Meal {
  public id: string;
  public categoryIds: string;
  public title: string;
  public imageUrl: string;
  public ingredients: string;
  public steps: string;
  public duration: string;
  public complexity: string;
  public affordability: string;
  public isGlutenFree: boolean;
  public isVegan: boolean;
  public isVegetarian: boolean;
  public isLactoseFree: boolean;

  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
