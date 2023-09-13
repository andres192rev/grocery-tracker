//Starter Code
//This starter code will be needed in order to read from the console.

//For more information on how to use the readline:

//https://nodejs.org/api/readline.html
// Import the readline module for handling user input in the console
const { exit } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

let groceryList = [];

rl.on('line', (line) => {
    console.log(line);
    const commandArgs = line.split(' ');
    const firstArg = commandArgs[0];
    console.log(commandArgs);
    //user can exit program
    if(firstArg == "q" || firstArg =="quit"){
        console.log('exiting program');
        exit(0);
     }

    //user can display grocery list
    if(firstArg == "list" || firstArg == "l"){
        console.log(groceryList);
    } 
    //user can add item to list
    if(firstArg == "add" ||  firstArg == "a" ){
        if(typeof(commandArgs[1]) === 'string' || typeof(commandArgs[1]) instanceof String && commandArgs.length ==  5  ){
            console.log("adding items to groceryList" );
            const groceryItem = {
                name: commandArgs[1],
                quantity: commandArgs[2],
                price: commandArgs[3],
                bought: commandArgs[4]
            }
            groceryList.push(groceryItem);
        }
        else{
            console.log("wrong number of elements");
        }

    }   
    if(firstArg == "delete" || firstArg == 'd' && typeof(commandArgs[1]) === 'string'){
        const index = groceryList.findIndex(item => item.name === commandArgs[1]);
        if(index === -1){
            console.log('item not found');
        }
        else{
            console.log("item found at index " + index  + "deleting items");
            groceryList.splice(index, 1);
        }
    }

    if(firstArg == "bought" || firstArg == "b" && typeof(commandArgs[1]) === 'string'){
        const index = groceryList.findIndex(item => item.name === commandArgs[1]);
        if(index === -1){
            console.log('item not found');
        }
        else{
            console.log("item found at index " + index  + ". buying items now");
            groceryList[index].bought = true;
        }
    }
    











    
});


rl.once('close', () => {
     // end of input
 });



//my code 


