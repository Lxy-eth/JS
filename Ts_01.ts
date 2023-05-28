// //let isHandsome : boolean = true ;

// //let age :number = 18;

// let realname : string = 'lan';
// let fullName : string = "lan tao"

// let u : undefined = undefined;
// let n : null = null;
// // let age :number =null;

// // let realName : string = undefined


// let notSure : any = 1;
// notSure = "111";
// notSure = false;

// console.log(notSure);
// // notSure.name;
// // notSure.getName();

// function divide(pargma :unknown){
//     return pargma as number / 2;
// }
// divide(1);

// function welcome():void
// {
//     console.log('hello')
// }
// welcome()

// //异常 never 类型表示那些用不存在的值的类型
// function fn(msg:string):never{
//     throw new Error(msg)
// }

// //死循环
// function fn1():never{
//     while(true){

//     }
// }

// //never 类型是任何类型的子类型，也可以赋值给任何类型。

// // let test1 : never ;

// // let list:number[] = [1,3,2];
// // list.push(1);
// // console.log(list)

// //元组类型

// let tuple:[number,string] = [18,"jj"];
// tuple.push(100);//可以对元组使用数组的方法，比如使用 push 时，不会有越界报错
// //tuple.push(true);push 一个没有定义的类型，报错


//函数类型

// function add(x:number,y:number){
//     return x + y
// }

// add(2,3);
// console.log(add(2,3));

// function wel():void{
//     console.log('hello');
// }

// const add2 = (x:number,y:number) =>{
//     return x +y ;
// }
// console.log(add2(2,8));

//可选参数

// const add = (x:number,y:number,z?:number) =>{
//     return x + y 
// }
// console.log(add(1,3));
// console.log(add(1,34,3));

//默认参数

// function add(x:number,y:number = 100):number{
//     return x + y;

// }
// console.log(add(1));

// function add1(x:number = 100,y:number):number{
//     return x + y;
// }
// //如果带默认值的参数不是最后一个参数，用户必须明确的传入 undefined值来获得默认值。
// console.log(add1(undefined,1));


//函数的赋值
//函数重载

//函数重载是指两个函数名称相同，但是参数个数或参数类型不同，他的好处显而易见，不需要把相似功能的函数拆分成多个函数名称不同的函数。

// function add(x:number[]):number
// function add(x:string[]):string
// function add(x:any[]):any{
//     if(typeof x[0] == "string"){
//         return x.join;
//     }
//     if(typeof x[0] == "number"){
//         return x.reduce((acc,cur) => acc+cur)
//     }
// }


// function add(x:number[]) :number
// function add(x:string[]) :string
// function add(x:number[],y:number[]):number
// function add(x:string[],y:string[]):string
// function add(x:any[],y?:any[]):any{
//     if(Array.isArray(y) && typeof y[0] === "number"){
//         return x.reduce((acc,cur) => acc + cur) + y.reduce((acc,cur) => acc + cur)
//     }
//     if(Array.isArray(y) && typeof y[0] === "string"){
//         return x.join() + ',' + y.join()
//     }
//     if(typeof x[0] === 'string'){
//         return x.join();
//     }
//     if(typeof x[0] === 'number'){
//         return x.reduce((a,b) => a + b)
//     }
// }
// console.log(add([1,2,3]));
// console.log(add(['lin','18']));
// console.log(add([1,2,3],[1,2,3]));
// console.log(add(['lin','18'],['man','handsome']))


//interface

// interface Person {
//     name : string
//     age : number
// }
// const p1 : Person = {
//      name : 'lan',
//      age : 19
// }

// console.log(p1.name);

//跟函数的可选参数是类似的，在属性上加个 ?，这个属性就是可选的，比如下面的 age 属性

// interface Person {
//     name:string,
//     age ?: number
// }
// const p : Person = {
//     name:'lan'
// }
// const P1  : Person = {
//     name :'lan',
//     age : 20
// }

//如果希望某个属性不被改变，可以这么写：

// interface Person{
//     readonly id :number 
//     name : string
//     age : number
// }
// const P:Person = {
//     id :1,
//     name :'lan',
//     age : 18
// }

//interface 描述函数类型

// interface ISum {
//     (x:number,y:number):number
// }
// const add :ISum = (x,y) =>{
//     return x + y;
// }

//自定义属性

// interface Readom {
//     [a : string] :string
// }
// const abj : Readom ={
//     a:'lan',
//     b:'tao'
// }
// console.log(abj[1]);

// interface LikeArray {
//     [a : number] :string
// }
// const c : LikeArray = ['hello','lan']

// console.log(c[1])

// interface FuctionWithProps {
//     (x:number):number,
//     fnName :string
// }

// const a : FuctionWithProps =(x) =>{
    
//     return x
// }
//  a.fnName = 'lam'

//定义一个 Person 类，有属性 name 和 方法 speak

// class Person {
//     name : string 
//     constructor(name : string){
//         this.name = name

//     }
//     speak(){
//         console.log(`${this.name} is speaking`)
//     }
// }
// const p1 = new Person("lin");
// p1.name;
// p1.speak()

//继承

// class Student extends Person {
//     study(){
//         console.log(`${this.name} needs study`);
//     }
// }
// const P2 : Student = new Student("lan")

// P2.speak()
// P2.study()

//super关键字

//例中 Student 类没有定义自己的属性，可以不写 super ，但是如果 Student 类有自己的属性，就要用到 super 关键字来把父类的属性继承过来。

// class Student extends Person {
//         grade : number
//         constructor(name:string,grade:number){
//             super(name)
//             this.grade = grade
//         }
// }

// const s1 :Student = new Student('lan',18)
// s1.speak()

//子类对父类的方法进行了重写，子类和父类调同一个方法时会不一样。

// class Student extends Person {
//     speak() {
//         return `Student  ${super.speak()}`
//     }
// }


//public 可写可不写，不写默认也是 public。

// class Person {
//     public name : string
//     public constructor(name :string){
//         this.name = name
//     }
//     public speak() {
//         console.log(`${this.name} is speaking`)
//     }
// }



//private，私有的，只属于这个类自己，它的实例和继承它的子类都访问不到。

// class Person {
//     private name :string
//    public  constructor(name:string){
//         this.name = name
//    }
//    public speak(){
//     console.log(`${this.name} is speaking`)
//    }
// }
// const p : Person = new Person('lan');
// p.name;

//protected 受保护的，继承它的子类可以访问，实例不能访问。

// class Person {
//     protected name : string
//     public  constructor(name:string){
//                 this.name = name
//            }
//            public speak(){
//             console.log(`${this.name} is speaking`)
//         }
// }

// const p1 : Person = new Person('lan');
// //p1.name
// class Student extends Person {
//     study() {
//         console.log(`${this.name} needs study`)
//     }
// }

//static 是静态属性，可以理解为是类上的一些常量，实例不能访问。


// class Circle {
//     static pi = 3.14
//     public radius: number
//     public constructor(radius: number){
//         this.radius = radius
//     }
//     public calcLength(){
//         return Circle.pi * this.radius * 2
//     }
// }


//抽象类
//指的是只能被继承，不能被实例化的类

// abstract class Animal{

// }
// const a = new Animal();

//抽象类中的抽象方法只能被子类实现

// abstract class Animal {
//     constructor(name:string){
//         this.name = name;
//     }
//     public name:string;
//     public abstract sayHi():void;

// }
// class Dog extends Animal {
//     constructor(name:string){
//         super(name);
//     }
//     public sayHi(): void {
//         console.log('lan');
//     }
// }

//抽象方法和多态
//多态指的是，父类定义一个抽象方法，在多个子类中有不同的实现，运行的时候不同的子类就对应不同的操作

// abstract class Animal{
//     constructor(name:string){
//         this.name = name
//     }
//     public name:string;
//     public abstract sayHi():void
// }

// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     public sayHi(): void {
//         console.log('lan');
//     }
// }
// class Cat extends Animal {
//     constructor(name:string){
//         super(name)
//     }
//     public sayHi(): void {
//         console.log('mao');
//     }
// }

//this 类型

// class StudyStep {
//     step1() {
//         console.log('listen');
//         return this
//     }

//     step2() {
//         console.log('write');
//         return this
//     }
// }

// //链式调用

// const s = new StudyStep();
// s.step1().step2()

//在继承的时候,this 可以表示父的类型，也可以表示子的类型

// class StudyStep {
//     step1() {
//         console.log('listen');
//          return this
//             }
        
//     step2() {
//          console.log('write');
//         return this
//             }
// }
// class  myStudyStep extends StudyStep {
//     next() {
//         console.log('before done, study next!')
//         return this
//     }
// }
// const m = new myStudyStep()
// m.step1().next().step2().next()

//interface 和 class 的关系

//implements 是实现的意思，class 实现 interface。

// interface MusicInterface {
//     playMusic():void
// }
// class Cellphone implements MusicInterface {
//     playMusic() {
//     }
// }

// 比如汽车（Car 类）也有播放音乐的功能，你可以这么做：

// 用 Car 类继承 Cellphone 类
// 找一个 Car 类和 Cellphone 类的父类，父类有播放音乐的方法，他们俩继承这个父类

// interface MusicInterface {
//     playMusic();
// }
// class Car implements MusicInterface{
//     playMusic() {
        
//     }
// }

// class Cellphone implements MusicInterface{
//     playMusic() {
        
//     }
// }


//约束构造函数和静态属性
//使用 implements 只能约束类实例上的属性和方法，要约束构造函数和静态属性，需要这么写。



//枚举

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Up)
// console.log(Direction.Down);
// console.log(Direction.Left);
// console.log(Direction.Right)

// console.log(Direction[0]);
// console.log(Direction[1]);
// console.log(Direction[2]);
// console.log(Direction[3]);


// 复制代码
// 如果枚举第一个元素赋有初始值，就会从初始值开始递增，
// enum Direction {
//     Up = 6,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Up);
// console.log(Direction.Down)      
// console.log(Direction.Left)      
// console.log(Direction.Right) 

//反向映射


//手动赋值
// enum ItemStatus {
//     Buy = 1,
//     Send,
//     Receive

// }
// console.log(ItemStatus['Buy']);
// console.log(ItemStatus.Buy);
// console.log(ItemStatus['Send']);
// console.log(ItemStatus['Receive']);

// enum ItemStatus {
//     Buy = 100,
//     Send = 20,
//     Receive = 1
// }

// console.log(ItemStatus['Buy'])      // 100
// console.log(ItemStatus['Send'])     // 20
// console.log(ItemStatus['Receive'])  // 1


// enum FileAccess {
//     Read = 1 << 1,
//     Write = 1 << 2,
//     ReadWrite = Read | Write
// }
// console.log(FileAccess.Read);
// console.log(FileAccess.Write);
// console.log(FileAccess.ReadWrite);

//字符串的枚举
// enum Direction {
//     Up = "Up",
//     Down = "Down",
//     Left = "Left",
//     Right = "Right"
// }
// const value = 'Up'
// if(value == Direction.Up){
//     console.log("y")
// }


//类型推论

// let a;
// a = 18;
// a = 'lan';

// let userName = 'lin';
// //userName = 1

// function printAge(age:number){
//     console.log(age)
//     return age;
// }
// printAge(18);

// interface PrintAge {
//     (num:number):number
// }
// const printAge1: PrintAge = printAge 

// let arr = [0,1,null,'lan'];

// const nums: Array<number> = [1,2,3];
// const date:Date = new Date();
// console.log(date);

// const err :Error = new Error('Error!');
// const reg :RegExp = /abc/
// console.log(reg)
// console.log(Math.pow(2,9));

//DOM 和 BOM

// let body : HTMLElement = document.body

// let allDiv : NodeList = document.querySelectorAll('div')

// document.addEventListener(
//     'click',(e: MouseEvent) => {
//         e.preventDefault()
//     }
// )

//联合类型访问他们的公共类型

// let num : number | string
// num = 1;
// num = 'lan';
// console.log(num.length) 


//交叉类型

// interface Person {
//     name : string
//     age  : number
// }

// type Student = Person & { grade : number}
// const s1 : Student = {
//     age:10,
//     name :'lam',
//     grade : 10
// }
// s1.name = 'hello'
// console.log(s1.name);
// console.log(s1);

//类型别名

// type Name = string
// type NameResolver = () => string
// type NameOrResolver = Name | NameResolver
// function getName(n:NameOrResolver):Name{
//         if(typeof n === 'string'){
//             return n
//         }else{
//             return n()
//         }
// }
// getName('lan');
// getName(() => 'la')
// type name = string;

// type arrItem = number | string

// const arr: arrItem[] = [1,2,"lan"];
// type Person = {
//     name : name
// }

// type Student = Person & {grade : number};
// type Teacher = Person & {major :string};

// type StudentAandTeacher = [Student,Teacher];//元组类型

// const list: StudentAandTeacher = [
//     {name:'lan',grade:100},
//     {name:'lan',major:'Chinese'}
// ]

//type 和 interface的区别

//相同点是都可以定义对象或者函数
//都允许继承

// interface Person {
//     name : string
//     age  : number
// }
// const person :Person = {
//     name : 'lan',
//     age : 20
// }
// type Person1 = {
//     name : string
//     age  : number
// }
// const person1 : Person1 = {
//     name : 'lan',
//     age  : 20
// }

// //定义函数
// type addType = (num1:number,num2:number) => number;

// interface addType1 {
//     (num1:number,num2:number):number
// }
// const add: addType = (num1,num2) => {
//     return num1 + num2
// }

// const add1 : addType1 = (num1,num2) =>{
//     return num1 - num2
// }
// console.log(add(1,23))

//都允许继承

// interface Person {
//     name : string
// }
// interface Student extends Person {
//     grade : number
// }
// const  person :Student ={
//     name:'lan',
//     grade : 10
// }

// type Person = {
//     name : string
// }

// interface Student extends Person {
//     grade : number
// }

// interface Person1 {
//     name:string
// }

// type Person2  = Person1 & {grade: number}
//interface 使用 extends 实现继承， type 使用交叉类型实现继承


// interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。


// type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰。


// type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行


// interface可以合并重复声明，type 不行

//类型的保护

// function getLength(arg:number | string):number {
//     return arg.toString().length
// }

// console.log(getLength(1))

//  const lengths = (arg:number | string) => {
//     if(typeof arg === 'string'){
//         return arg.length
//     }else {
//         return arg.toString().length
//     }
//  }
//  console.log(lengths('hello'))

//类型断言

//值 as 类型

// function getLength(arg:number | string) :number {
//     const str  = arg as string
//     if(str.length) {
//         return str.length
//     }else {
//         const number = arg as number 
//         return number.toString().length;
//     }
// }

//字面量类型

// type ButtonSize = 'mini' | 'small' | "normal" | "large"
// type Sex = '男' | '女'

//范型
//泛型的语法是 <> 里写类型参数，一般可以用 T 来表示。

// function print<T>(arg:T):T{
//     console.log(arg);
//     return arg;
// }
// const res:number = print(111)



// type Print = <T>(arg :T) => T
// const printFn:Print = function print(arg){
//     console.log(arg);
//     return arg
// }
// interface Iprint<T> {
//     (arg:T):T
// }
// function print<T>(arg:T) {
//     console.log(arg);
//     return arg;
// }

// const myPrint:Iprint<number> = print;


//默认参数类型
// interface Iprint<T= number>{
//     (arg:T):T;

// }
// function print<T>(arg:T):T{
//     console.log(arg);
//     return arg
// }
// const myPrint :Iprint = print;

//处理多个函数参数

// function swap(tuple) {
//     return [tuple[1],tuple[0]];
// }
// function sawp<T,U>(tuple: [T,U]) : [U ,T]{
//     return  [tuple[1],tuple[0]];
// }
// const res = sawp(['lin',18]);
// console.log(res);

//函数副作用操作
//比如我们有一个通用的异步请求方法，想根据不同的 url 请求返回不同类型的数据。

// function request(url:string) {
//     return fetch(url).then(res => res.json());

// }

// //调用一个获取用户信息的接口：
// request('user/info').then(res => {
//     console.log(res);
// })

// interface UserOInfo {
//     name:string;
//     age:number;
// }
// function request<T>(url:string): Promise<T> {
//     return fetch(url).then(res => res.json())
// }

// request<UserOInfo>('url/info').then(res => {
//     console.log(res.age)
// })

//约束泛型
// function printLength<T>(arg:T):T{
//     console.log(arg.length);
//     return arg
// }

// interface ILength {
//     length:number;
// }

// function printLength<T extends ILength>(arg:T):T{
//     console.log(arg.length);
//     return arg
// }
// const str = printLength('lan');
// const arr = printLength([1,2,3]);
// const obj = printLength({length:10});

//范型约束类

// class Stack<T> {
//     private data: T[] = [];
//     push(item:T) {
//         return this.data.push(item);
//     }
//     pop() : T | undefined {
//         return this.data.pop()
//     }
// }
// const s1 = new Stack<number>();

// s1.push(1);

//泛型约束接口

// interface IkeyValue<T,U> {
//     key:T;
//     value:U
// }
// const k1:IkeyValue<number,string> = {key : 18 , value : 'lan'};
// const k2:IkeyValue<string,number> = {key:'lan',value : 18};


// //泛型定义数组
// const arr:number[] = [1,2,3];
// interface Arr<T> {
//     arr:T
// }
// const arr1: Arr<number> = {arr:1};
// const arr2:Array<number> = [1,2,3];


//索引类型
//从对象中抽取一些属性的值，然后拼接成数组

// const userInfo = {
//     name:'lan',
//     age:'18',
//     sex:'女'
// }
// function getValue(userInfo:any,keys:string[]){
//     return keys.map(key => userInfo[key])
// }

// console.log(getValue(userInfo,['name','age']));
// console.log(getValue(userInfo,['sex','outlook']));


// interface IPerson {
//     name:string;
//     age:number
// }

// type Test = keyof IPerson[]

// console.log(typeof('Test'))

// let type1 : IPerson['name'];
// let type2 : IPerson['age'];

//extends(泛型约束)
//T extends U ,表示泛型变量可以通过继承某个类型，获得某些属性

// interface ILength {
//     length: number
// }
// function printLength<T extends ILength>(arg:T):T{
//     console.log(arg.length);
//     return arg;
// }


//映射类型
// type Person = "name" | 'school' | "major";
// type Obj = {
//     [p in Person]:string;
// }
// //partial

// interface IPerson {
//     name:string;
//     age:number
// }
// let p1:IPerson = {
//     name:'lan',
//     age : 18
// }

// type IPartial = Partial<IPerson>;
// let p1:IPartial = {}

//Partial 的实现用到了 in 和 keyof

// type Partials<T> = {
//     [P in keyof T]?: T[P]
// }

//[P in keyof T] 遍历T上的所有的属性
//?: 设置属性为可选的
//T[P] 设置类型为原来的类型


//Readonly
//Readonly<T> 将T 的所有的属性映射为只读的

// interface IPerson {
//     name: string;
//     age: number;
// }

// type IReadOnly = Readonly<IPerson>

// let p1 : IReadOnly = {
//     name:'lan',
//     age:18
// }

//Pick
//pick用于抽象子集，挑选一组属性并且组成一个新的了类型
// interface IPerson {
//     name:string,
//     age:number;
//     sex:string;
// }
// type IPick = Pick<IPerson,'name' | 'age'>

// let p1: IPick = {
//     name:'lan',
//     age:18
// }

//Record 创建新属性的非同态映射类型
// interface IPerson{
//     name:string;
//     age:number;
// }
// type IRecord = Record<string,IPerson>;

// let personMap:IRecord = {
//     person1 : {
//         name:'lan',
//         age:18,
//     },
//     person2:{
//         name:'lan',
//         age:18
//     }
// }



//ES6

//let 变量不能重复声明

//块集作用域
// {
//     let g ="123"
// }
// console.log(g)


//不存在变量提升

// let  song='nihao';
// console.log(song)

//不影响作用域
// {
//     let school = "nihao";
//     function fn()
// } 
// let a = 1;
// let b = 2;
// let c = 3;
//let [a,b,c] = [1,2,3];



// var a ;
// a = 10;
// console.log(a);
//let 变量的提升
//2/是一个块的作用域
// if(1===1){
//     let b =10
//     console.log(b)
// }

//3.let不能重复声明


//const 声明常量，无法修改

//const max = 30;

// const Person = {
//     name : 'nohao',
// }

// Person.name ="a";


//不会污染全局的变量



//模版字符串

// let id :number = 10;
// let name1 :string = "lan"

// let person :string=`你好: ${id} ${name1}`;
// console.log(person);

//带参数的默认值的函数

// function add(a=10,b=20):number {
//     return a + b
// }

// console.log(add());

//默认的表达式也可以是一个函数

// function add(a:number, b =getVal(5)) {
//     return a + b;
// }

// function getVal(val) {
//     return val +5;
// }
// add(10);
// console.log(add(10))



//es6中的剩于参数

// function pick(obj,...keys) {
//     // console.log(keys);

//     let result = Object.create(null);
//     for(let i = 0; i < keys.length; i++) {
//         result[keys[i]] = obj[keys[i]];
//     }
//     return result;
// }
// let book = {
//     title: 'es6',
//     auther:'lan',
//     year:2022,
// }

// let bookData = pick(book,'title','year','auther');

// console.log(bookData);




//扩展运算符
//剩余运算符把多个独立的合并到一个数组中
//扩展运算符经数组分割

// const maxnum = Math.max(20,30);

// //处理数组中的最大值

// const arr1 :number[] = [1,2,3,23,324];
// // console.log(Math.max.apply(null,arr1));

// console.log(Math.max(...arr1));

//es6 的箭头函数
//=> 来定义 function(){} 等于 ()=>{}

// let add = function (a,b) {
//     return a + b;
// }
// console.log(add(10,20));


// let add1 = (a:number,b:number) :number=>{
//     return a + b
// }

// let add2 = (val:number) => val;


// console.log(add1(10,20));

// let getObj = (id:number) =>({id:id,name:'lan'})
// let obj = getObj(20)
// console.log(obj);

// let fn = (function (){
//     return function() {
//         console.log('nihao')
//     }
// })

// let fn = (() =>{
//     return () =>{
//         console.log('hello es6');
        
//     }
// })();
// fn()

//this指向,没有this绑定

// let Pagehandler = {
//     id : 123,
//     init:function() {
//         document.addEventListener('click',function(event){
//             this.doSomeThings(event,type);
//         })

//         }
//     }


//与解构赋值结合

// function connect (ootions){
//     let host = options.host
//     let username = options
// }

// connect({
//     host:'localhost',
//     username:'root',
//     passwrod:'root',

// })

//剩余参数rest参数,必须放在最后
// function fn(a,b,...args){
//     console.log(a);
//     console.log(b);
//     console.log(args);
    
// }
// fn(1,2,3,4,4);

// function date(...args){
//     console.log(args);
// }

// date('lan','xing','yu');



//扩展运算符，将数组转成逗号分隔参数序列

//声明一个数组

// const tf :number[] = [1,2,3];
// function chuwan(...args){
//     console.log(args);
// }
// chuwan(...tf);

//数组的合并

// const k = ['lan',"x"];
// const x = ['xing','l'];
// const c = [...k,...x];
// console.log(c);

//数组的克隆

// const san = ['z','x','c'];
// const cao = [...san];
// console.log(cao);

//将伪数组转换成真正的数组

// const div = document.querySelectorAll('div');

// const divs = [...div];
// console.log(divs);


//symbol 值是唯一的，新的数据类型 值不能与其他的运算

// let s = Symbol();
// console.log(s,typeof s);
// let s = Symbol('lan');
// console.log(s);
// //symbol.for
// let s1 = Symbol.for('l');
// console.log(s1);

//let result  = s + 100;

//向对象里面添加up down
// let game = {
//     let methods = {
//         up:Symbol,
//         down:Symbol
//     }
// }


//迭代器

//声明数组

// const xiyou = ['sun','tang','sha','zhu'];

// //使用for..of
// for(let v of xiyou){
//     console.log(v);
// }
// let iterator = xiyou[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//迭代器的应用

//自定义遍历数组

// const banji = {
//     name:'yi',
//     stus:[
//         "l",
//         "m",
//         'n'
//     ],
//     [Symbol.iterator](){
//         let index :number = 0;
//         let _this = this;
//         return {
//             next: function(){
//                 if(index >= banji.stus.length){
//                     const result = {value:'this.stus[i]',done:false}
//                     index ++;
//                     return result;
//                 }else{
//                     return {value: undefined,done:true}
//                 }
                
//             }
//         }
//     }
// }
// //遍历这个对象
// for(let v of banji) {
//     console.log(v);
// }


//生成器是一个特殊的函数，异步编程 纯回调函数

//函数代码的分隔符
function * gen () {
    console.log('hello ');
    
}
let iterator =gen();
console.log(iterator.next());


