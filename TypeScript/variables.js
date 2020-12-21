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
var sub = "Angular11";
var wish = "Welcome to " + sub;
console.log(wish);
var tbl_name = "employees";
var sal = 50000;
var sql_query = "select * from " + tbl_name + " where esal>" + sal;
console.log(sql_query);
var u_name = "admin";
var u_pwd = "admin123";
var sql_query_test = "select * from " + tbl_name + " where uname='" + u_name + "' and upwd='" + u_pwd + "'";
console.log(sql_query_test);
//number
//decimal, double, hexadecimal , octal and binary
//hexadecimal number should prefix with "0x"
//octal number should prefix with "0o"
//binary number should prefix with "0b"
var $decimal = 100;
var _double = 100.12345;
var hex123 = 0x123ABC;
var octalNum = 83;
var binaryNum = 10;
console.log($decimal, _double, hex123, octalNum, binaryNum);
//boolean
//true / false
var flag = true;
console.log(flag);
var var1 = "Hello";
var1 = 100;
console.log(var1);
//var 123data:string = "Hello";    //An identifier or keyword cannot immediately follow a numeric literal
//any
//any datatype have the capability to hold "all categories" of data
var data = true;
console.log(data);
//number array
var num_arr1 = [10, 20, 30, 40, 50];
var num_arr2 = [60, 70, 80, 90, 100];
//forEach()   //ES6
num_arr1.forEach(function (element, i) {
    console.log(element, num_arr2[i]);
});
//string array
var sub_arr1 = ["Angular", "ReactJS", "VueJS"];
var sub_arr2 = ["MySQL", "SQLServer", "MongoDB"];
sub_arr1.forEach(function (element, index) {
    console.log(element, sub_arr2[index]);
});
var obj1 = {
    "sub_one": "Angular11",
    "sub_two": "Deno",
    "sub_three": "MongoDB"
};
console.log(obj1.sub_one, obj1.sub_two, obj1.sub_three);
var products = [
    { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
    { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
    { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
    { "p_id": 555, "p_name": "p_five", "p_cost": 50000 }
];
products.forEach(function (element, index) {
    console.log(element.p_id, element.p_name, element.p_cost);
});
