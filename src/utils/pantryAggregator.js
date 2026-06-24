// stub — needs proper implementation.
// returns the cheapest combination of retail packs to cover the deficit
// for each ingredient still needed after the pantry is consumed.

import { VOLUME_TO_ML, MASS_TO_G } from '../constants/unitConversions';
import { PURCHASABLE_UNITS } from '../constants/purchasableUnits';

export function computePantryDeficit(selectedRecipes, currentPantry = []) {
  // todo: this is naive. doesn't normalize units, skips the pricing math,
  // and definitely doesn't optimize package sizes.
  const totals = {};
  for (const recipe of selectedRecipes) {
    for (const ing of recipe.ingredients) {
      const key = ing.ingredientId;
      if (!totals[key]) totals[key] = { quantity: 0, unit: ing.unit };
      totals[key].quantity += ing.quantity;
    }
  }
  for (const have of currentPantry) {
    if (totals[have.ingredientId]) {
      totals[have.ingredientId].quantity -= have.quantity;
    }
  }
  return Object.entries(totals)
    .filter(([_, v]) => v.quantity > 0)
    .map(([ingredientId, v]) => ({
      ingredientId,
      packs: null,
      totalPrice: null,
      canonicalDeficit: v.quantity,
    }));
}
