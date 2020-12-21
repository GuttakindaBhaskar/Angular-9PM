//if we know only declarations, but we don't know implementations then we will choose interfaces.
//implementations known by either classes or json objects
//we will declare interfaces by using "interface" keyword
//classes will provide implentations by using "implements" keyword

/*
    interface interface1{
        sub_one:string;
        sub_two:string;
        sub_three:string;
    };
    let obj1:interface1 = {
        sub_one : "Angular11",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    };
    console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );    //Angular11 NodeJS MongoDB

    let obj2:interface1 = {
        sub_one : "ReactJS",
        sub_two : "Deno",
        sub_three : "CassandraDB"
    };
    console.log( obj2.sub_one, obj2.sub_two, obj2.sub_three );   //ReactJS Deno CassandraDB

    let obj3:interface1 = {
        sub_one : "VueJS",
        sub_two : "SpringBoot",
        sub_three : "CouchDB"
    };
    console.log( obj3.sub_one, obj3.sub_two, obj3.sub_three );   //VueJS SpringBoot CouchDB
*/

/*
    interface interface1{
        var_one:any;
        fun_one():any;
    };

    let obj:interface1 = {
        var_one : "Hello",
        fun_one : ():any=>{
            return obj.var_one; 
        }
    };
    console.log( obj.var_one, obj.fun_one() );

    class class_one implements interface1{
        var_one:any;
        constructor(arg1:any){
            this.var_one = arg1;
        };
        fun_one():any{
            return this.var_one;
        };
    };
    let obj1:class_one = new class_one("Hello");
    console.log( obj1.var_one, obj1.fun_one() );
*/



/*
    interface interface1{
        var_one:any;
    };

    interface interface2 extends interface1{
        var_two:any;
    };

    let obj:interface2 = {
        var_one : "Hello_1",
        var_two : "Hello_2"
    };

    console.log( obj.var_one, obj.var_two );   //Hello_1 Hello_2
*/


/*
    interface interface1{
        fun_one():any;
    };

    interface interface2 extends interface1{
        fun_two():any;
    };

    interface interface3 extends interface2{
        fun_three():any;
    };

    let obj:interface3 = {
        fun_one : ():any=>{
            return "Hello_1";
        },
        fun_two : ():any=>{
            return "Hello_2";
        },
        fun_three : ():any=>{
            return "Hello_3";
        }
    };
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );   //Hello_1 Hello_2 Hello_3
*/



//multiple inheritance
/*
    interface interface1{
        var_one:any;
    };
    interface interface2{
        var_two:any;
    };
    interface interface3 extends interface1,interface2{}

    let obj:interface3 = {
        var_one : "Hello_1",
        var_two : "Hello_2"
    };
    console.log( obj.var_one, obj.var_two );    //Hello_1 Hello_2
*/

/*
    interface interface1{
        var_one:any;
    };
    interface interface2{
        var_one:any;
    };
    interface interface3 extends interface1,interface2{
        var_one:any;
    };
    class class_one implements interface3{
        var_one:any;
        constructor(arg1:any){
            this.var_one = arg1;
        };
    };
    console.log( new class_one("Hello").var_one );   //Hello
*/

/*
    //hirarichal inheritance
    interface interface1{
        fun_one():any;
    };
    interface interface2 extends interface1{
        fun_two():any;
    };
    interface interface3 extends interface1{
        fun_two():any;
    };
    interface interface4 extends interface1{
        fun_two():any;
    };
    let obj1:interface2 = {
        fun_one : ():any=>{
            return "fun_one";
        },
        fun_two : ():any=>{
            return "fun_two";
        }
    };
    let obj2:interface3 = {
        fun_one : ():any=>{
            return "Hello_1";
        },
        fun_two : ():any=>{
            return "Hello_2";
        }
    };

    let obj3:interface4 = {
        fun_one : ():any=>{
            return "Welcome_1";
        },
        fun_two : ():any=>{
            return "Welcome_2";
        }
    };
    console.log( obj1.fun_one(), obj1.fun_two() );
    console.log( obj2.fun_one(), obj2.fun_two() );
    console.log( obj3.fun_one(), obj3.fun_two() );
*/

//hybrid inheritance
interface interface1{
    var_one:any;
};
interface interface2 extends interface1{
    var_two:any;
};
interface interface3 extends interface1{
    var_three:any;
};
interface interface4 extends interface2,interface3{
    var_four:any;
};
class class_one implements interface4{
    var_one:any = "Angular11";
    var_two:any = "NodeJS";
    var_three:any = "MongoDB";
    var_four:any = "AWS";
};
let obj:class_one = new class_one();
console.log( obj.var_one, 
             obj.var_two,
             obj.var_three,
             obj.var_four );    //Angular11 NodeJS MongoDB AWS














