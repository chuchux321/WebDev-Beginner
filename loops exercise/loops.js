//  <ol type = "1">
  //      <li>Print all numbers between -10 and 19</li>
    //    <li>Print all even numbers between 10 and 40</li>
      //  <li>Print all odd numbers between 300 and 333</li>
        //<li>Print all numbers divisible by 5 and 3 between 5 and 50</li>
    //</ol>

var num = -10;

while(num < 20){
    console.log(num);
    num++;
}

var num = 10;

while(num <= 40){
    console.log(num);
    num+=2;
}

var num = 301;

while(num <= 333){
    console.log(num);
    num += 2;
}

var num = 5;

while (num <= 50) {
    if (num % 3 === 0 && num % 5 === 0){
        console.log(num);
    }
        num++;
}