/*function doSomething() {
    console.log("hello world");
}*/

/*function square(num) {
    console.log(num * num);
}

function square(it doesn't matter what you call this arguement)*/

/*function sayHello(just a placeholder for whatever function gets passed in) {

}*/

function isEven(x) {
    if(x % 2 === 0){
    return true;
    }
    else if (x % 2 !==0){
        return false;
    }
}

function factorial(x){
    if(x === 0){
        return 1;
    } else {
    return x * factorial(x-1);
    }
}

function kebabToSnake(x){
    return x.replace(/-/g, "_");
}
