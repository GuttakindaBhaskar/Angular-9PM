//variables are used to store the data
//Ex. string , number , boolean , objects, arrays,....
//we will declare variables by using "var" , "let" and "const"
//"let" and "const" keyword introduced in ES6
//variables should contain [a-z] , [A-Z] , [0-9] , $ and _
//variables should not start with digits

/*
    Syntax.
    -------
    var/let/const variablename:datatype = value;
*/

//string
//collection of characters called as string
//we will declare string by using ""(double quotes) , ''(single quotes) or ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator used to define the paragraphs
var sub:string = "Angular11";
var wish:string = `Welcome to ${sub}`;
console.log(wish);


var tbl_name:string = "employees";
var sal:number = 50000;
var sql_query:string = `select * from ${tbl_name} where esal>${sal}`;
console.log(sql_query);


var u_name:string = "admin";
var u_pwd:string = "admin123";
var sql_query_test:string = `select * from ${tbl_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log(sql_query_test);



//number
//decimal, double, hexadecimal , octal and binary
//hexadecimal number should prefix with "0x"
//octal number should prefix with "0o"
//binary number should prefix with "0b"
var $decimal:number = 100;
var _double:number = 100.12345;
var hex123:number = 0x123ABC;
var octalNum:number = 0o123;
var binaryNum:number = 0b1010;
console.log( $decimal,_double,hex123,octalNum,binaryNum );


//boolean
//true / false
var flag:boolean = true;
console.log(flag);



var var1:number | string = "Hello";
var1 = 100;
console.log(var1);


//var 123data:string = "Hello";    //An identifier or keyword cannot immediately follow a numeric literal

//any
//any datatype have the capability to hold "all categories" of data
var data:any = true;
console.log(data);

//number array
var num_arr1:number[] = [10,20,30,40,50];
var num_arr2:Array<number> = [60,70,80,90,100];
//forEach()   //ES6
num_arr1.forEach((element,i)=>{
    console.log(element,num_arr2[i]);
});

//string array
var sub_arr1:string[] = [`Angular`,`ReactJS`,`VueJS`];
var sub_arr2:Array<string> = [`MySQL`,`SQLServer`,`MongoDB`];
sub_arr1.forEach((element,index)=>{
    console.log(element,sub_arr2[index]);
});


var obj1:any = {
    "sub_one" : "Angular11",
    "sub_two" : "Deno",
    "sub_three" : "MongoDB"
};
console.log(obj1.sub_one, obj1.sub_two, obj1.sub_three);

var products:any[] = [
    {"p_id":111,"p_name":"p_one","p_cost":10000},
    {"p_id":222,"p_name":"p_two","p_cost":20000},
    {"p_id":333,"p_name":"p_three","p_cost":30000},
    {"p_id":444,"p_name":"p_four","p_cost":40000},
    {"p_id":555,"p_name":"p_five","p_cost":50000}
];
products.forEach((element,index)=>{
    console.log( element.p_id, element.p_name, element.p_cost );
});







































