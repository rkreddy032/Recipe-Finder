// local measurement mappings for the pantry calculator
// please don't swap these for standard internet conversions
// our cups are 235ml (long story). if you use 240ml the dough recipes get messed up
// everything needs to boil down to g, ml, or ct before doing any math

export const CANONICAL_UNIT = {
  mass: 'g',
  volume: 'ml',
  count: 'ct',
};

// volume to ml mapping (weird local kitchen sizes)
export const VOLUME_TO_ML = {
  cup: 235,
  tbsp: 14.8,
  tsp: 4.93,
  ml: 1,
  l: 1000,
  pint: 473,
  quart: 946,
  gallon: 3785,
};

// mass to grams
export const MASS_TO_G = {
  g: 1,
  kg: 1000,
  oz: 28.35,
  lb: 453.6,
};

// density multipliers
// if someone writes "1 cup of flour" in a recipe but flour is a 'mass' item,
// convert the cup to ml first, then multiply by this number to get grams
export const DENSITY_G_PER_ML = {
  flour_ap: 0.53,
  sugar_white: 0.85,
  sugar_brown: 0.93,
  honey: 1.42,
  oil_olive: 0.92,
  butter: 0.911,
  salt: 1.22,
  yeast_dry: 0.59,
};

// one-off units that skip the generic tables above
// this maps straight to the item's base unit (g for mass, ct for count)
// fyi butter sticks are exactly 113g here
export const INGREDIENT_SPECIFIC_UNITS = {
  butter: {
    stick: 113,
    pat: 5,
  },
  egg: {
    large: 1,
    medium: 1,
    jumbo: 1,
  },
  yeast_dry: {
    packet: 7,
  },
  garlic: {
    clove: 1,
    head: 10,
  },
};

// tells the calculator which logic to use for each item
export const INGREDIENT_CATEGORY = {
  flour_ap: 'mass',
  sugar_white: 'mass',
  sugar_brown: 'mass',
  honey: 'mass',
  oil_olive: 'mass',
  butter: 'mass',
  salt: 'mass',
  yeast_dry: 'mass',
  milk_whole: 'volume',
  water: 'volume',
  vanilla: 'volume',
  egg: 'count',
  garlic: 'count',
  // chocolate chips aren't in the purchasable db yet but still need
  // to pass through the aggregator (just return nulls for the retail fields)
  chocolate_chips: 'mass',
};
