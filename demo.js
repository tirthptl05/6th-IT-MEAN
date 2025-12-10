function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(5, 7);
console.log("Sum =", result);


let arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

let obj={
    name:"tirth",
    age:23,
    city:"BDQ",
    result: {
        math: 90,
        science: 85
    }
};

console.log(obj.result.math)