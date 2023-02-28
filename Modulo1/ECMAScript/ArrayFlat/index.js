//Default ele só faz no primeiro nível

const arr = [1, 2, 5, [2, 6]];

console.log(arr.flat());

const arr1 = [1, 2, 5, [2, 6, [2, 6]]];

console.log(arr1.flat());

const arr2 = [1, 2, 5, [2, 6, [5, 8, 2]]];

console.log(arr2.flat(2));

const arr3 = [1, 2, 5, [2, 6, [5, 8, 2, [2, 5, [2, 5]]]]];

console.log(arr3.flat(Infinity));

const arr4 = [1, 2, , 7];

console.log(arr4.flat());
