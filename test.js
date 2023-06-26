const arr = [4, 4, 4, 3, 3];

function dup(array) {
  const result = [array[0]];
  array.forEach((element) => {
    if (result[result.length - 1] !== element) {
      result.push(element);
    }
  });
  return result;
}

console.log(dup(arr));
