const removeConsecutiveDuplicates = (array) => array.filter((value, index) => value !== array[index - 1]);

const arr = [4, 4, 4, 3, 3];
const arr1 = [1, 1, 3, 3, 2, 4, 4];
console.log(removeConsecutiveDuplicates(arr)); // [4, 3, 1, 2, 3]
console.log(removeConsecutiveDuplicates(arr1)); // [1, 3, 2, 4]
