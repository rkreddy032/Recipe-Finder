// dummy data for testing the aggregator
// heads up: if consumable is false, it means it's a shared resource (like pan grease).
// so don't sum those together across recipes. just take the max amount needed.
// make sure you convert the units to the same base before doing the max check though

export const sampleRecipes = [
  {
    id: 'rec_cookies',
    name: 'basic cc batch v2',
    servings: 24,
    ingredients: [
      { ingredientId: 'flour_ap', quantity: 2.25, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'butter', quantity: 1, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'butter', quantity: 1, unit: 'tbsp', consumable: false, purpose: 'greasing' },
      { ingredientId: 'sugar_white', quantity: 0.75, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'sugar_brown', quantity: 0.75, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'egg', quantity: 2, unit: 'large', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'salt', quantity: 1, unit: 'tsp', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'vanilla', quantity: 1, unit: 'tsp', consumable: true, purpose: 'incorporated' },
    ],
  },
  {
    id: 'rec_bread',
    name: 'weekend dough test',
    servings: 8,
    ingredients: [
      { ingredientId: 'flour_ap', quantity: 3, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'water', quantity: 1.25, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'salt', quantity: 2, unit: 'tsp', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'yeast_dry', quantity: 1, unit: 'packet', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'oil_olive', quantity: 1, unit: 'tbsp', consumable: false, purpose: 'greasing' },
    ],
  },
  {
    id: 'rec_pancakes',
    name: 'diner style flapjacks',
    servings: 6,
    ingredients: [
      { ingredientId: 'flour_ap', quantity: 1.5, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'sugar_white', quantity: 2, unit: 'tbsp', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'salt', quantity: 0.5, unit: 'tsp', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'egg', quantity: 1, unit: 'large', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'milk_whole', quantity: 1.25, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'butter', quantity: 3, unit: 'tbsp', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'butter', quantity: 0.5, unit: 'tbsp', consumable: false, purpose: 'greasing' },
    ],
  },
  {
    id: 'rec_garlic_bread',
    name: 'heavy garlic side',
    servings: 4,
    ingredients: [
      { ingredientId: 'flour_ap', quantity: 250, unit: 'g', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'butter', quantity: 0.5, unit: 'stick', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'garlic', quantity: 4, unit: 'clove', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'salt', quantity: 0.5, unit: 'tsp', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'oil_olive', quantity: 2, unit: 'tbsp', consumable: true, purpose: 'incorporated' },
    ],
  },
  {
    id: 'rec_cake',
    name: 'sweet cake test',
    servings: 1,
    ingredients: [
      { ingredientId: 'sweetened_milk', quantity: 2, unit: 'cup', consumable: true, purpose: 'incorporated' },
      { ingredientId: 'baking_spray', quantity: 4, unit: 'tbsp', consumable: false, purpose: 'greasing' },
      { ingredientId: 'syrup_simple', quantity: 1, unit: 'cup', consumable: true, purpose: 'finishing' }
    ]
  }
];
