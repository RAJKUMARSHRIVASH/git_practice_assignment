
// Problem is to Check whether the number given is Prime number or not

let num = 13;
let factor = 0;

for(let i = 0; i<=num; i++){
    if(num%i == 0){
        factor++;
    }
    if(factor == 2){
        console.log(num," is a Prime Number");
    }else {
        console.log(num," is Not a Prime Number");
    }
}