// Maps non-purchasable compound ingredients to their base components.
// The ratio represents the proportion of the parent's canonical quantity
// that must be allocated to the child ingredient.
export const SUBSTITUTION_GRAPH = {
  sweetened_milk: {
    // A 100ml request for sweetened_milk requires 90ml of milk and 10ml of honey.
    components: [
      { ingredientId: 'milk_whole', ratio: 0.90 },
      { ingredientId: 'honey', ratio: 0.10 }
    ]
  },
  baking_spray: {
    // A 100ml request requires 50ml of olive oil and 50ml of water.
    components: [
      { ingredientId: 'oil_olive', ratio: 0.50 },
      { ingredientId: 'water', ratio: 0.50 }
    ]
  },
  // --- The Infinite Loop Trap ---
  syrup_simple: {
    components: [
      { ingredientId: 'water', ratio: 0.50 },
      { ingredientId: 'sugar_liquid', ratio: 0.50 }
    ]
  },
  sugar_liquid: {
    components: [
      { ingredientId: 'syrup_simple', ratio: 1.0 } // Cyclic dependency
    ]
  }
};
