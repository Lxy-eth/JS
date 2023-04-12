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
