const randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

while (true){
    let n = prompt('1-100 hurtelh n too ugnu uu!');
    if(n > randomNumber) {
        alert('Tanii oruulsan too ih bn!');
    } else if(n < randomNumber) {
        alert('Tanii oruulsan too baga bn!');
    } else if(randomNumber == n) {
        alert(`Congrats, ta hojloo!`);
        break;
    } else  {
        alert('invalid data');
    };
}

    
