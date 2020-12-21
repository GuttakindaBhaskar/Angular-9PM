/*
    namespace my_namespace{
        export let var_one:string = "Angular11";
        export let var_two:string = "NodeJS";
        export let var_three:string = "MongoDB";
    };
*/
/*
    namespace namespace1{
        export const var_one:string = "Hello";
    };
*/
/*
    namespace namespace1{
        export const var_one:string = "Hello_1";
        export namespace namespace2{
            export const var_two:string = "Hello_2";
        }
    };
*/
/*
    namespace namespace1{
        const var_one:any="Hello";
        export function fun_one():any{
            return var_one;
        };
    };
*/
/*
    namespace Sai{
        export const acc:number = 10000;
    };
*/
/*
    namespace namespace1{
        export const mobile:number = 12345;
    };
*/
var namespace1;
(function (namespace1) {
    namespace1.var_one = "Hello_1";
    function fun_one() {
        return "Hello_2";
    }
    namespace1.fun_one = fun_one;
    ;
    class class_one {
        constructor() {
            this.wish = "Hello_3";
        }
    }
    namespace1.class_one = class_one;
    ;
    ;
    namespace1.obj = {
        key1: "Hello_4"
    };
})(namespace1 || (namespace1 = {}));
;
/*
    /// <reference path="file1.ts" />
    console.log( my_namespace.var_one,
                my_namespace.var_two,
                my_namespace.var_three );
*/
/*
    namespace namespace2{
        export const var_two:string = "Hello_2";
    };
*/
/*
    namespace namespace3{
        export const var_three:string = "Hello_3";
        export namespace namespace4{
            export const var_four:string = "Hello_4";
        };
    };
*/
/*
    /// <reference path="file1.ts" />
    console.log( namespace1.fun_one() );
*/
/*
    namespace Ganesh{
        export const acc:number = 20000;
    };
*/
/*
    namespace namespace1{
        export const mobile:number = 989898;
    };
*/
/// <reference path="file1.ts" />
console.log(namespace1.var_one, namespace1.fun_one(), new namespace1.class_one().wish, namespace1.obj.key1);
