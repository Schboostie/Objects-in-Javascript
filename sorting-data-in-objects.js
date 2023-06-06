// Input object with arrays of objects
const data = {
  fruits: [
    { name: 'Apple', quantity: 5 },
    { name: 'Banana', quantity: 10 },
    { name: 'Orange', quantity: 3 },
  ],
  animals: [
    { name: 'Cat', age: 2 },
    { name: 'Dog', age: 5 },
    { name: 'Elephant', age: 10 },
  ],
};

// Function to sort the values based on a specific condition
function sortValues(obj, key) {
  // Loop through each property of the object
  for (let prop in obj) {
    // Check if the property exists and is an array
    if (obj.hasOwnProperty(prop) && Array.isArray(obj[prop])) {
      // Sort the array of objects based on the specified key
      obj[prop].sort((a, b) => a[key] - b[key]);
    }
  }

  return obj;
}

// Sorting fruits array based on quantity
const sortedFruits = sortValues(data, 'quantity');
console.log(sortedFruits.fruits); // Output: [ { name: 'Orange', quantity: 3 }, { name: 'Apple', quantity: 5 }, { name: 'Banana', quantity: 10 } ]

// Sorting animals array based on age
const sortedAnimals = sortValues(data, 'age');
console.log(sortedAnimals.animals); // Output: [ { name: 'Cat', age: 2 }, { name: 'Dog', age: 5 }, { name: 'Elephant', age: 10 } ]
