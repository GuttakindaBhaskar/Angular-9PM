//strict typing, then we will choose "generics"
;
var fun_one = function (arg1, arg2) {
    console.log(arg1, arg2);
};
var obj1 = fun_one;
fun_one("Hello_1", "Hello_2");
var fun_two = function (arg1, arg2) {
    console.log(arg1, arg2);
};
var obj2 = fun_two;
obj2(100, 200);
