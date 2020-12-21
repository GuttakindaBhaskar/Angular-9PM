//let
//let is the keyword introduced in ES6
//let keyword used to declare the variables
/*
    for(let i:number=0;i<5;i++){
        
    };
    console.log(i);    //var : 5   let : Cannot find name 'i'.

    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/
/*
    let data:number = 100;
    let data:number = 200;
    console.log(data);       //let : Cannot redeclare block-scoped variable 'data'.    //var : 200
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/
/*
    console.log(data);       //let : Block-scoped variable 'data' used before its declaration.    //var : undefined(variable hoisting)
    let data:number = 100;
    //variable hoisting issue raised by var keyword
    //we can overcome variable hoisting issue by using let keyword
*/
/*
    //global variable
    let data:number = 100;

    {
        //local variable
        let data:number = 200;
    }

    console.log(data);     //var : 200   //let : 100
    //if any block code effecting the global members technically called as global polluting issue

    //global pollutinh issue raised because of var keyword
    //we can overcome global polluting issue with the help of let keyword
*/
/*
        var                     let

    var keyword introduced      let keyword introduced
    in ES1                      in ES6

    variable hoisting issue     we can overcome variable
    raised because of var       hoisting issue by using
    keyword                     let keyword

    var keyword allows the      let keyword won't allows the
    duplicate variables         duplicate variables

    global pollting issue       we can overcome global polluting issue
    raised because of var       by using "let" keyword
    keyword

    var members are not block   let members are block scoped
    scoped members              members
*/
//const
//const keyword introduced in ES6
//const keyword used to declare the variables
//reinitilization not possible with const keyword
/*
    const data:number = 100;
    data = 200;    //Cannot assign to 'data' because it is a constant.
*/
var arr = [10, 20, 30, 40];
//arr = [];   //Cannot assign to 'arr' because it is a constant.
arr[0] = 100;
arr[3] = 400;
arr.push(500);
console.log(arr); //[ 100, 20, 30, 400, 500 ]
var obj = { "sub_one": "Angular11" };
//obj = {};    //Cannot assign to 'obj' because it is a constant.
obj.sub_one = "ReactJS";
obj.sub_two = "NodeJS";
obj.sub_three = "MongoDB";
console.log(obj);
