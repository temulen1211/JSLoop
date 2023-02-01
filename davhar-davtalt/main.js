//1.
let input = Math.floor(Math.random() * 10);

let j = '';
input = 9;
for(i = 1; i <= input; i++) {
    j += i + ' ';
    console.log(j);
}; 

//2.


for(i = input; i >= 1; i--) {
    let m = '';
    for(k = input; k >= input - i + 1; k--){
        m = m + k + ' ';
    }
    console.log(m)
}

