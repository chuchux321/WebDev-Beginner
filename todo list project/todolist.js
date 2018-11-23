var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");


while(input !== "quit"){
    //ask again for new input
    //handle input
if(input === "list") {
    listTodos();
} else if(input === "new") {
    addTodo();
    } else if(input === "delete"){
       deleteTodo();
    }
//ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
    console.log("********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("********")
}

function addTodo(){
    //ask for new todo
    //add todos array
    var newTodo = prompt("Enter new todo");
    //add to todos array
        todos.push(newTodo);
        console.log("Added Todo");
}

function deleteTodo(){
     //ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delte");
        //delete that todo
        //splice()
        todos.splice(index, 1);
        console.log("Deleted Todo");
}