const address = ['123 Sesame Street', 'Queens', 'New York', '24675'];
const [street, city, state, zip] = address;
console.log(`${street}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [foodItem, smallCost, mediumCost, largeCost] = item;
console.log(`${foodItem} - Small: ${smallCost}, Medium: ${mediumCost}, Large: ${largeCost}`);