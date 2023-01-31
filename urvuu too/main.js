let n = prompt('duriin n toog garaas ugnu uu!');

let reverseNumber = n => parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)

console.log(reverseNumber(n));
