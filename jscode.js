// Day 6 // arrays in JS

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr); // object

// accessing elements
console.log(arr[0]); // 1
console.log(arr[2]); // 3
console.log(arr[4]); // 5
console.log(arr[5]); // undefined
// modifying elements
arr[2] = 10;
console.log(arr); // [1,2,10,4,5]
// length of array
console.log(arr.length); // 5
// adding elements
arr.push(6);
console.log(arr); // [1,2,10,4,5,6]
// removing elements
arr.pop();
console.log(arr); // [1,2,10,4,5]

for(let idx=0; idx<arr.length; idx++){
    console.log(`Element at index ${idx} is ${arr[idx]}`);
}

// practice problem:

let marks=[85,97,44,37,76,60]
let average=0;
for (let i=0 ; i <marks.length;i++){
     average+=marks[i]/marks.length;
}
    console.log(average);

let price=[250,645,300,900,50];

for(let i=0;i<price.length;i++){
     console.log(`original price at index ${i}:${price[i]}`);
     price[i]=price[i]*0.9; // adding 10% discount price
     console.log(`discounted price at index ${i}:${price[i]}`);
}
