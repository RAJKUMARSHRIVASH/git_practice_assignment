
// Problem is to Check whether the number given is Prime number or not.

let num = 97;
let factor = 0;

for(let i = 0; i<=num; i++){


    // here or logic is we know that to be a prime number the number should be divisible by 1 or itself only
    // in other words we can also say that it will be having only 2 factors i.e. factor 1 an itself
    // as it wont be divisible by anyone so using property as a logic.

    if(num%i == 0){
        factor++;
    }
    if(factor == 2){
        console.log(num," is a Prime Number");
    }else {
        console.log(num," is Not a Prime Number");
    }
}