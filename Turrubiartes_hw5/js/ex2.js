let array = [1,2,3,4,5,6,7,8,9,10]
let oddarray = array.filter( x => x % 2 !=0);
let divisibleby2or5 = array.filter((x => x % 2 == 0) || (x % 5 == 0));
let divisibleby3squared = array.filter(x => x % 3 == 0).map(y => y * y);
let sumOf = array.filter(x => x % 5 ==0).map(y => y * y).reduce((acc,value) => acc + value, 0);

console.log(oddarray);
console.log(divisibleby2or5);
console.log(divisibleby3squared);
console.log(sumOf);
