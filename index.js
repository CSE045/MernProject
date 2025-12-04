//console.log(a);
//hosting
/*var a;
console.log(typeof(a));*/
//global scope/Function scope
//console.log(a);


//ES6
//let and const
//ocnsle.log(b);
//reference error
///temporal Dead zone
//let b=20;
//b=130;
//block scpe
//console.log(b);
//{
//let b=30;
//console.log(b);
//{
//let b=30;
//console.log(b);
//}
//console.log(c);
//const c=40;
//c=70;
//console.log(c);

//functions
//1.named function
//function namedfunc(){
    //console.log("named function");
    //console.log("named function");
   // console.log("named function");
//}
//function call/Inovation
//namedfunc();

//2)function expression

//let funExp=function(){
    //console.log("function expression");
//};

//funcExp();

//3)arrow function
//let arrowFun=()=>{
    //console.log("arrow function");
//};
//arrowFun();

//4.callback function-----no name and 5.IIFE(Imediately invoked fuction expression)
//(()=>{
    //console.log("Arrow function called");
//})();

/*const addTwonumbers=(parameter1,parameter2)=>{
    let num1=parameter1 ;
    let num2=parameter2;
    let sum=num1+num2;
    console.log("The sum of two numbers is:${sum}", sum);
};
addTwonumbers(20,50);
addTwonumbers(40,50);
addTwonumbers(); */
/*const MutipleTwonumbers=(parameter1,parameter2)=>{
    let num1=parameter1 ;
    let num2=parameter2;
    let sum=num1*num2;
    console.log("The Multiple of two numbers is:", sum);
};
MutipleTwonumbers(20,50);
MutipleTwonumbers(40,50);
MutipleTwonumbers();*/
/*let a = "10";
let b = 8;
console.log(a+b) */ /*for + operator it will concatenate and give 102
all other operator -,*,/ will do it operations */

//in array === will check the address so false //
/*let c = [1,2,3]
let d = [1,2,3]
console.log(c === d) // ans : false //
console.log(c[0] === d[0]) *// ans : true //

/*let arr=[1,2,3,4,5,6];
console.log(arr);

//for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]+i);
}
console.log(arr);
// for each
/*let arr1 = [1,2,3,4,5,6];
arr1.forEach((Element,index) => {   
  console.log(Element,index);
}); // arr1.forEach((Element,index) => you can use any word in this bracket (aa, sr),(el,ind) like that we can give
let arr2 = [1,2,3,4,5,6];
let aa = arr.map((el,ind) => {
    return  el + ind;
});
console.log(arr2);
console.log(aa);

let aa = arr.flatMap((el,ind) => el + ind); */ // using map in single line // 

/*let a = [1,2,3,4,5,6,7,8,9];
//filter: it will work on truthly values
let b =a.filter((el,index) => {
   return index > 4;
});
console.log(b);

// reduce : return a single value

let c = a.reduce((acc,el,index) => {
        console.log(acc,el);
    return acc+el;
},200);
console.log(c); */

let obj = {
    a: 10,
    b: 20,
    data: {
        c:30,
        d:40,
        f: {
            g:50,
            h:60,
        },
    },
};
