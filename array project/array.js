//for each function:
//arr.forEach(someFunction);
//example:
//var color = ["blue", "green", "yellow"];
//colors.forEach(function(color){
    //color is a placeholder, call it whatever you want
    //console.log(color);
//})

//push and pop
//colors.push("green");
//push will add a string to the last index in the array
//pop will remove the last string of the last index in the array

//shift and unshift
//unshift adds to the front of the array
//colors.unshift("infrared") adds infrared to the first index in the array
//colors.shift(); removes the first index in the array

//slice
//fruits.slice(1, 3); slices out the strings in the specified indexes in the array

//printReverse([1,2,3,4])

function printReverse(array) {
    var output = [];
    while (array.length) {
        output.push(array.pop());
    }
    return output;
}

console.log(printReverse(["a", "b", "c", "d"]));

function isUniform(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}
console.log(isUniform([1, 1, 1, 2, 1]));

var nums = ['100','300','400','60','40'];
var sum = 0;

for(var i=0; i < nums.length; i++){

    sum += parseInt(nums[i]);

}

console.log(sum);

var num = [1, 300, 5, 500]
var max = 0;
for(i=0; i < num.length; i++ ) {
    if( num[i] > max ) {
        max = num[i];
    }
}

console.log(max);


