//if we know only declarations, but we don't know implementations then we will choose interfaces.
//implementations known by either classes or json objects
//we will declare interfaces by using "interface" keyword
//classes will provide implentations by using "implements" keyword
;
;
;
;
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Angular11";
        this.var_two = "NodeJS";
        this.var_three = "MongoDB";
        this.var_four = "AWS";
    }
    return class_one;
}());
;
var obj = new class_one();
console.log(obj.var_one, obj.var_two, obj.var_three, obj.var_four);
