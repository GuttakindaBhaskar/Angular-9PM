//class
//collection of variables and functions called as "class"
//collection of "objects" also called as class
//class is "blueprint" object
//we will define classes by using "class" keyword
//we will create object to the class by using "new" keyword
//we will declare the constructor by using "constructor" keyword
//recomended modifier for variables is "private"
//recomended modifier for functions is "public"
//typescript supports 3 types of modifiers
//@public       @private    @protected


/*
    class class_one{
        public sub_one:string;
        public sub_two:string;
        public sub_three:string;
        constructor(){
            this.sub_one = "Angular11";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        };
    };
    let obj:class_one =  new class_one();
    console.log( obj.sub_one, obj.sub_two, obj.sub_three );
    //Angular11 NodeJS MongoDB
*/


/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;

        constructor(...arg1:string[]){
            this.sub_one = arg1[0];
            this.sub_two = arg1[1];
            this.sub_three = arg1[2];
        };

        public getData():string{
            return `FullStack Development Means....${this.sub_one}<=>${this.sub_two}<=>${this.sub_three}`;
        }
    };
    let obj:class_one = new class_one("Angular11","NodeJS","MongoDB");
    console.log( obj.getData() );


    let obj1:class_one = new class_one("ReactJS","Deno","CouchDB");
    console.log( obj1.getData() );
*/

/*
    class class_one{
        public obj1:any;
        public obj2:any;
        public obj3:any;
        constructor(public arg1:any,
                    public arg2:any,
                    public arg3:any){
            this.obj1 = new class_two();
            this.obj2 = arg2;
            this.obj3 = arg3;
        };
    };

    class class_two{
        public sub:string = "Angular11";
    };

    class class_three{
        public sub:string = "NodeJS";
    };

    class class_four{
        public sub:string = "MongoDB";
    };

    let obj:class_one = new class_one(new class_two(),
                                    new class_three(),
                                    new class_four());
    console.log( obj.obj1.sub, 
                obj.obj2.sub,
                obj.obj3.sub );     //Angular11 NodeJS MongoDB
*/


/*
    class class_one{
        constructor(public arg1:any){}
    };
    console.log( new class_one("Hello").arg1 );   //Hello
*/


//Inheritance
//Getting the data from parent class to child classes called as Inheritance
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hirarichal inheritance
//5) hybrid inheritance
//we will implement inheritance by using "extends" keyword

/*
    class class_one{
        public var_one:string = "Hello_1";
    };

    class class_two extends class_one{
        public var_two:string = "Hello_2";
    };

    let obj1:class_one = new class_one();
    console.log(obj1.var_one);      //Hello_1

    let obj2:class_two = new class_two();
    console.log( obj2.var_one, obj2.var_two );    //Hello_1 Hello_2
*/

/*
    class class_one{
        constructor(public arg1:any){}
    };

    class class_two extends class_one{

    };

    let obj:class_two = new class_two("Hello");
    console.log( obj.arg1 );
*/


/*
    class class_one{
        public arg1:any;
        constructor(public arg:any){
            this.arg1 = arg;
        };
    }

    class class_two extends class_one{

    };

    let obj:class_two = new class_two("Angular11");
    console.log( obj.arg1 );    //Angular11
*/

/*
    class class_one{
        public arg1:any="Hello_2";
        // constructor(public arg1:any){
        // };
    };
    class class_two extends class_one{
        constructor(public arg1:any){
            super();
        };
    };
    let obj:class_two = new class_two("Hello");
    console.log( obj.arg1 );   //Hello
*/

/*
    class class_one{
        var_one:string = "Hello_1";
    };

    class class_two extends class_one{
        var_two:string = "Hello_2";
    };

    class class_three extends class_two{
        var_three:string = "Hello_3";
    };

    let obj1:class_one = new class_one();
    console.log( obj1.var_one );            //Hello_1

    let obj2:class_two = new class_two();
    console.log(obj2.var_one, obj2.var_two);    //Hello_1 Hello_2

    let obj3:class_three = new class_three();     
    console.log( obj3.var_one, obj3.var_two, obj3.var_three );   //Hello_1 Hello_2 Hello_3

    let obj4:class_one = new class_two();
    let obj5:class_one = new class_three();
    console.log( obj4.var_one, obj5.var_one );    //Hello_1 Hello_1

    let obj6:class_two = new class_three();
    console.log( obj6.var_one, obj6.var_two );     //Hello_1 Hello_2
*/


/*
    class class_one{
        constructor(public arg1:any){}
    };

    class class_two extends class_one{

    

        constructor(public arg1:any, public arg2:any){
            super(arg2);
        }
    };

    class class_three extends class_two{
        constructor(public arg1:any, public arg2:any, public arg3:any){
            super(arg2,arg3);
        }
    };

    let obj1:class_three = new class_three("Angular11","NodeJS","MongoDB");
    console.log( obj1.arg1, obj1.arg2, obj1.arg3 );
*/

/*
    class class_one{
        fun_one():void{
            console.log("fun one !!!");
        }
    };

    class class_two extends class_one{
        fun_two():void{
            console.log("fun two !!!" );
        };
    };

    class class_three extends class_two{
        fun_three():void{
            console.log("fun three");
        }
    };

    let obj:class_three = new class_three();
    obj.fun_one(), obj.fun_two(), obj.fun_three();
*/

/*
    //multiple inheritance
    class class_one{}
    class class_two{}
    class class_three extends class_one,class_two{}
    //multiple inheritance not supported by Typescript
*/


/*
    //Hirarchical Inheritance
    class class_one{ var_one:string = "Hello_1" }

    class class_two extends class_one{ var_two:string = "Hello_2" }

    class class_three extends class_one{ var_two:string = "Hello_3" }

    class class_four extends class_one{ var_two:string = "Hello_4" }

    console.log( new class_one().var_one );
    console.log( new class_two().var_one, new class_two().var_two );
    console.log( new class_three().var_one, new class_three().var_two );
    console.log( new class_four().var_one, new class_four().var_two );
*/


/*
    //Hybrid Inheritance
    class class_one{}

    class class_two extends class_one{}

    class class_three extends class_one{}

    class class_four extends class_two, class_three{}
    //Hybrid Inheritance also not possible
*/


//polymorphism
//1) function overriding
//2) function overloading

//function overriding
//overriding the parent class functionality with child class functionality called as function overriding
//we will implement function overriding with the help of inheritance

/*
    class class_one{
        dbFun():any{
            return "data from oracle database soon...!";
        };
    };
    class class_two extends class_one{
        dbFun():string{
            return "data from mongodb database soon...!";
        }
    };
    let obj:class_two = new class_two();
    console.log( obj.dbFun() );    //data from mongodb database soon...!
*/


//function overloading
//same function with different signatures called as function overloading

/*
    function add(arg1:number,arg2:number):number;
    function add(arg1:string,arg2:string):string;

    function add(arg1:any,arg2:any):any{
        return arg1+arg2;
    };

    console.log( add(10,10) );    //20    //Hello_1Hello_2
    console.log( add("Hello_1","Hello_2") );
    //console.log( add("Hello_1",100) );     //No overload matches this call
*/


/*
    function fun_one(arg1:any,arg2:any):any;

    function fun_one(arg1:any,arg2:any):any{
        return arg1+arg2;
    }

    console.log( fun_one(10,10) );
    //console.log( fun_one(10,10,10) );   //Expected 2 arguments, but got 3.
    console.log( fun_one("Hello_1","Hello_2") );
    console.log( fun_one(10,"Hello_1") );
*/

/*
    class class_one{
        fun_one(arg1:number,arg2:number):number;
        fun_one(arg1:string,arg2:string):string;

        fun_one(arg1:any,arg2:any):any{
            return arg1+arg2;
        }    
    };

    console.log( new class_one().fun_one(10,10) );                  //20
    console.log( new class_one().fun_one("Hello_1","Hello_2") );    //Hello_1Hello_2
*/


//static
//static memeber we can access directly by "class names"
//static members can't be access by objects
//static members can't be initilized by constructors with this keyword
//static keyword applicable to variables and functions only
/*
    class class_one{
        static var_one:string = "hello";
    };
    console.log( class_one.var_one );    //hello
    //console.log( new class_one().var_one );
*/

/*
    class class_one{
        static var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        };
    };
*/


/*
    class class_one{
        static var_one:any = "Hello_1";
        //static constructor(){}
        static fun_one():any{
            return "Hello_2";
        };
    };
    console.log( class_one.var_one );
    console.log( class_one.fun_one() );
*/


/*
    class class_one{
        sub_one:string;
        sub_two:string;
        sub_three:string;
        private constructor(){
            this.sub_one = "Angular11";
            this.sub_two = "Deno";
            this.sub_three = "CassandraDB";
        };
        static myFun():any{
            return new class_one();
        };
    };
    let obj:class_one = class_one.myFun();
    console.log( obj.sub_one, 
                obj.sub_two,
                obj.sub_three );
*/


/*
    //readonly
    //we can only read the data, but we can't update the data
    class class_one{
        readonly data:any;
        constructor(arg1:any){
            this.data = arg1;
        };
    };
    let obj1:class_one = new class_one("Hello");
    console.log( obj1.data );     //Hello
    //obj1.data = "Hi";    //Cannot assign to 'data' because it is a read-only property.

    let obj2:class_one = new class_one("Welcome");
    console.log( obj2.data );    //Welcome
    //obj2.data = "Hello";       //Cannot assign to 'data' because it is a read-only property.
*/

























































































































































