    // Problem to check the given String is Palindrome or not

    let Str = "conunoc";

    let revStr = "";

    for(let i = Str.length-1; i>=0; i++){
        revStr+=Str[i];
    }
    if(revStr === Str ) {
        console.log("It's a Palindrome");

    }else {
        console.log("It's Not a Palindrome");
    }