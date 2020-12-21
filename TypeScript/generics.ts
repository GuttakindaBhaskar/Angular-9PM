//strict typing, then we will choose "generics"

/*
    function fun_one<T>(arg1:T):T{
        return arg1;
    };
    console.log( fun_one<string>("Hello") );                //Hello
    console.log( fun_one<number>(100) );                    //100
    console.log( fun_one<boolean>(true) );                  //true
    //console.log( fun_one<string>(1000) );      //Argument of type 'number' is not assignable to parameter of type 'string'.
*/


/*
    function fun_one<G>(arg1:G[]):G[]{
        return arg1;
    };
    let arr1 = fun_one<string>(["Hello_1","Hello_2","Hello_3"]);
    arr1.push("Hello_4");
    console.log(arr1);    //[ 'Hello_1', 'Hello_2', 'Hello_3', 'Hello_4' ]
    //arr1.push(500);    //Argument of type 'number' is not assignable to parameter of type 'string'.

    let arr2 = fun_one<number>([10,20,30]);
    arr2.push(40);
    console.log(arr2);    //[ 10, 20, 30, 40 ]
    //arr2.push("Hello_5");    //Argument of type 'string' is not assignable to parameter of type 'number'.
*/

/*
    function fun_one<A,B>(arg1:A,arg2:B):void{
        console.log( arg1, arg2 );
    };
    fun_one<string,string>("Hello_1","Hello_2");     //Hello_1 Hello_2
    fun_one<number,number>(100,200);                //100 200
    fun_one<string,number>("Hello",1000);           //Hello 1000
*/





/*
    class class_one<A,B,C>{
        private var_one:A;
        private var_two:B;
        private var_three:C;
        constructor(arg1:A,arg2:B,arg3:C){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        };
        public getVarOne():A{
            return this.var_one;
        };
        public getVarTwo():B{
            return this.var_two;
        };
        public getVarThree():C{
            return this.var_three;
        };
    };
    let obj1:class_one<string,string,string> = new class_one("Hello_1","Hello_2","Hello_3");
    console.log( obj1.getVarOne(), obj1.getVarTwo(), obj1.getVarThree() );//Hello_1 Hello_2 Hello_3

    let obj2:class_one<number,number,number> = new class_one(100,200,300);
    console.log( obj2.getVarOne(), obj2.getVarTwo(), obj2.getVarThree() );//100 200 300
*/


/*
    interface interface1<A>{
        (arg1:A):A;
    };
    let fun_one:any = (arg1:string):string=>{
        return arg1;
    };
    let obj:interface1<string> = fun_one;
    console.log( obj("Hello") );     //Hello

    let fun_two:any = (arg1:number):number=>{
        return arg1;
    };
    let obj1:interface1<number> = fun_two;
    console.log( obj1(100) );    //100
*/


/*
    interface interface1<A,B>{
        (arg1:A,arg2:B):void;
    };

    let fun_one:any = (arg1:string,arg2:string):void=>{
        console.log( arg1,arg2 );
    };
    let obj1:interface1<string,string> = fun_one;
    obj1("Hello_1","Hello_2");     //Hello_1 Hello_2

    let fun_two:any = (arg1:number,arg2:number):void=>{
        console.log(arg1,arg2);
    };
    let obj2:interface1<number,number> = fun_two;
    obj2(100,200);          //100 200
*/
