/*
    function fun_one():string{
        return "welcome to typescript";
    };
    console.log( fun_one() );    //welcome to typescript
*/
/*
    function fun_one():any{
        return fun_two;
    };
    function fun_two():string{
        return "Hello";
    };
    console.log( fun_one()() );    //Hello
*/
/*
    function fun_one(arg1:string,
                    arg2:string,
                    arg3:string):void{
        console.log(arg1,"<=>",arg2,"<=>",arg3);
    };
    fun_one("Angular11","NodeJS","MongoDB");
    fun_one("ReactJS","Deno","CouchDB");
    fun_one("VueJS","NodeJS","SQLServer");
*/
/*
    let arr:any[] = [];

    function fun_one():string{
        return "Hello";
    };

    for(let i:number=0;i<5;i++){
        arr.push( fun_one );
    };

    arr.forEach((element,index)=>{
        console.log(element());
    });
*/
//Anonymous Functions
//The function without name called as "Anonymous Function"
//Anonymous functions also called as "Arrow Functions/Fat Arrow Functions/Lamda Functions/CallBack Functions"
//we will represent Arrow Functions by using "=>"
//Arrow Functions introduced in ES6
//Arrow Functions are secured functions
/*
    Syntax
    ------

    var/let/const variablename = (arguments with datatype):returntype=>{
        //business logic
    };
    variablename(parameters);
*/
/*
    let fun_one = ():void=>{
        console.log("Hello");
    };
    fun_one();   //Hello
*/
/*
    let fun_one = (arg1:string,
                    arg2:string,
                    arg3:string):string=>{
        return `${arg1}<=>${arg2}<=>${arg3}`;
    };
    console.log( fun_one("Angular11","NodeJS","MongoDB") );
    console.log( fun_one("ReactJS","Deno","CouchDB") );
    console.log( fun_one("VueJS","NodeJS","MySQL") );
*/
/*
    let networkCall:any = (arg1:any,arg2:any):any=>{
        console.log(  arg1(), arg2() );
    };
    networkCall( ():string=>{ return "Success" },
                ():string=>{ return "Error" } );
*/
/*
    let arr:any[] = [];

    for(let i:number=0;i<5;i++){
        arr.push( ():string=>{ return "Hello"} );
    };

    arr.forEach((element,index)=>{
        console.log( element() );
    });
*/
//rest parameters in functions
//we will store "more than one value" by using rest parameter
//we will represent rest parameter by using "..." symbol
//"..." symbol technically called as "spread operator"
//spread operator introduced in ES6
//spread operator position should be the last.
//we can have only spread parameter per function
/*
    function fun_one(...arg1:any):any{
        console.log(arg1);
    };
    fun_one("Hello_1");                 //[ 'Hello_1' ]
    fun_one("Hello_1","Hello_2");       //[ 'Hello_1', 'Hello_2' ]
    fun_one();                          //[]
    fun_one(undefined);                 //[ undefined ]
    fun_one(undefined,null);            //[ undefined, null ]
*/
/*
    function fun_one(...arg1:any,...arg2:any):any{}
    //A rest parameter must be last in a parameter
*/
/*
    function fun_one(...arg1:any,arg2:any):any{}
    //A rest parameter must be last in a parameter list
*/
/*
    function fun_one(arg1:any,...arg2:any):void{
        console.log(arg1, arg2);
    };
    fun_one("Hello_1");                         //Hello_1 []
    fun_one("Hello_1","Hello_2");               //Hello_1 [ 'Hello_2' ]
    fun_one("Hello_1","Hello_2","Hello_3");     //Hello_1 [ 'Hello_2', 'Hello_3' ]
    fun_one(undefined);                         //undefined []
    fun_one(undefined,undefined);               //undefined [ undefined ]
    fun_one(null);                              //null []
    fun_one(null,null);                         //null [ null ]
*/
//optional parameters in functions
//while calling the functions, few parameters are optional
//this concept introduced in ES6
//we will represent optional parameters with "?"
//we can have more than one optional parameter per function
//in case of normal with optional, optional parameter should be last
//default value of optional parameter in "undefined"
/*
    function fun_one(arg1?:any,arg2?:any,arg3?:any):void{
        console.log(arg1, arg2, arg3);
    };
    fun_one();                                  //undefined undefined undefined
    fun_one("Angular11","NodeJS","MongoDB");    //Angular11 NodeJS MongoDB
    fun_one("ReactJS",undefined,"CouchDB");     //ReactJS undefined CouchDB
    fun_one(null,null,null);                    //null null null
    fun_one("Angular11","NodeJS");              //Angular11 NodeJS undefined
*/
/*
    function fun_one(arg1:any,arg2?:any):void{
        console.log(arg1, arg2);
    };
    // fun_one();                           //Expected 1-2 arguments, but got 0.
    //fun_one("Hello_1");                   //Hello_1 undefined
    //fun_one("Hello_1","Hello_2");         //Hello_1 Hello_2
    //fun_one(undefined);                   //undefined undefined
    fun_one(null,null);                     //null null
*/
/*
    function fun_one(arg1:any,arg2?:any,...arg3:any):void{
        console.log( arg1, arg2, arg3 );
    };
    //fun_one();                            //Expected at least 1 arguments, but got 0.
    //fun_one("Hello_1");                   //Hello_1 undefined []
    //fun_one("Hello_1","Hello_2","Hello_3"); //Hello_1 Hello_2 [ 'Hello_3' ]
    fun_one(undefined,undefined,undefined);   //undefined undefined [ undefined ]
    fun_one(null,null,null);            //null null [ null ]
*/
/*
    function fun_one(arg1?:any,arg2:any,...arg3:any):any{}
*/
/*
    Default Parameters in Functions

        - while defining the functions, we will initilize the parameters.

        - this concept also introduced in ES6

        - we can have more than one default parameter
*/
/*
function fun_one(arg1:any="Angular11",arg2:any="NodeJS",arg3:any="MongoDB"):void{
    console.log(arg1, arg2, arg3);
};
fun_one();                                      //Angular11 NodeJS MongoDB
fun_one("ReactJS",undefined,"CouchDB");         //ReactJS NodeJS CouchDB
fun_one(undefined,undefined,undefined);         //Angular11 NodeJS MongoDB
fun_one(null,null,null);                        //null null null
*/
function fun_one(arg1, arg2, arg3) {
    if (arg3 === void 0) { arg3 = "Hello_3"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
;
//fun_one();                                        //Expected at least 1 arguments, but got 0.
fun_one("Hello_1"); //Hello_1 undefined Hello_3 []
fun_one("Hello_1", "Hello_2", undefined, "Hello_4"); //Hello_1 Hello_2 Hello_3 [ 'Hello_4' ]
fun_one(undefined, undefined, undefined, undefined); //undefined undefined Hello_3 [ undefined ]
fun_one(null, null, null, null); //
