//Abstract Classes
//when ever we know the partial implementations, then we will choose abstract classes
//we will declare abstract classes with "abstract" keyword
//we can't create the object to the abstract classes
//implementation provided by sub classes
/*
    abstract class class_one{
        fun_one():any{
            return "Hello_1";
        };
        abstract fun_two():any;
    };
    class class_two extends class_one{
        fun_two():any{
            return "Hello_2";
        }
    };
    let obj:class_two = new class_two();
    console.log( obj.fun_one(), obj.fun_two() );   //Hello_1 Hello_2
*/

/*
    abstract class class_one{
        abstract var_one:any;
    };
    abstract class class_two extends class_one{
        var_one:any = "Hello_1";
        abstract var_two:any;
    };
    class class_three extends class_two{
        var_two:any = "Hello_2";
        var_three:any = "Hello_3";
    };
    let obj:class_three = new class_three();
    console.log( obj.var_one, obj.var_two, obj.var_three );
*/


interface interface1{
    fun_one():any;
};
abstract class class_one implements interface1{
    fun_one():any{
        return "Hello_1";
    };
    abstract fun_two():any;
};
class class_two extends class_one{
    fun_two():any{
        return "Hello_2";
    };
};
let obj:class_two = new class_two();
console.log( obj.fun_one(), obj.fun_two() );







































