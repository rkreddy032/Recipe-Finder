// mapping for physical store items and their costs.
// since some stuff comes in multiple sizes now, each key holds an array of available packs.
//
// the math needs to figure out the lowest possible price to cover the missing amount.
// if there's only one size available, just round up to the nearest whole package like normal.
//
// note: if we need something that isn't defined here, we have no idea how to buy it.
// just return null for the pack array and price fields so the frontend knows to throw a warning.

export const PURCHASABLE_UNITS = {
  flour_ap: [
    { displayUnit: '1-kg bag',   sizeInCanonical: 1000, price: 5.00 },
    { displayUnit: '500-g sack', sizeInCanonical: 500,  price: 3.00 },
    { displayUnit: '300-g bag',  sizeInCanonical: 300,  price: 2.00 },
  ],
  sugar_white: [
    { displayUnit: '2-lb bag', sizeInCanonical: 907, price: 4.00 },
    { displayUnit: '1-lb bag', sizeInCanonical: 454, price: 2.50 },
  ],
  sugar_brown: [
    { displayUnit: '1-lb box', sizeInCanonical: 454, price: 3.00 },
  ],
  honey: [
    { displayUnit: '12-oz jar', sizeInCanonical: 340, price: 6.00 },
  ],
  oil_olive: [
    { displayUnit: '500-ml bottle', sizeInCanonical: 500, price: 8.00 },
    { displayUnit: '250-ml bottle', sizeInCanonical: 250, price: 5.00 },
  ],
  butter: [
    { displayUnit: '4-stick package', sizeInCanonical: 452, price: 5.00 },
    { displayUnit: '1-stick wrap',    sizeInCanonical: 113, price: 1.50 },
  ],
  milk_whole: [
    { displayUnit: 'quart carton', sizeInCanonical: 946, price: 2.50 },
  ],
  water: [
    { displayUnit: 'gallon jug', sizeInCanonical: 3785, price: 1.00 },
  ],
  egg: [
    { displayUnit: 'dozen',      sizeInCanonical: 12, price: 4.00 },
    { displayUnit: 'half-dozen', sizeInCanonical: 6,  price: 2.50 },
  ],
  yeast_dry: [
    { displayUnit: '3-packet strip', sizeInCanonical: 21, price: 3.00 },
  ],
  garlic: [
    { displayUnit: 'head', sizeInCanonical: 10, price: 1.00 },
  ],
  salt: [
    { displayUnit: '26-oz canister', sizeInCanonical: 737, price: 2.00 },
  ],
  vanilla: [
    { displayUnit: '2-oz bottle', sizeInCanonical: 59, price: 7.00 },
  ],
};
