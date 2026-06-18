js keywords 
var let const  are variables
let is values change
const for values that never chanhe example const pie=3.14
var a = 12; we dont use var keyword
we use let let a = 12; or we use const for constant values
var a;// declare
var a = 12 // declare and initialize
if we create any variable using var keyword it will
1.add itself in window
2.function scopped 
we can use var inside an function at any place irrespective of its block
func{
    if{
        var q =3; since this is functional scope despite we used it in a if block we still can use it anywhere inside the function
    }
}
3.we can declare the same and it will not show any error
var a = 12;
var a = 23;
and no erroeso thats why we use let and const
let a = 12;
let a = 22;
will give error 
const we create where we want to ake constant unchangeable variables
scope---> global block functional
let a = 12;//global
{
    let a =23; // block  //let is an block scooped
}


let a = 13;
{
    let a = 10;
    console.log(a) == 10
}
console.log(a)==13;

reassignment and re declaration
 we can reassign our variable 
 let a = 12;
 a = 23;
 this is allowed as now a is 23 not 12
 but if we do let a = 23;
 its redeclaration of same name variable and that is not allowed in case of let and const 

temporal dead zone

console.log(a);
let a =12;

//this will give an erroe as before defining/initializing an variable we are trying to fetch or console log it out
//js is not saying that we dont have a to log out or a is not present its just saying that without initialising it past we are accessing it and thats the error eans js knows a is present 
tdz the area where js knows variable exsists but it cant access it 

// at end use let and const.....


DATA TYPES--------------------------->>>>>>
1. primitives // string,number,boolean,null,undefined,symbol,bigint
2. reference // array, object, functions


let a = 12;
let b = a;
 a= a+2;
 now a=14 but b still is 12  primitive values can be copied directly 

 array[] object{} function() // we cant copy the directly it just give reference of original one 
 let a =[1,2,3]
 let b= a; 
 any change in a will reffer to b or vice versa so to copy we use some of their named operations
 1. string 
  . ''
  .""
  .`` backticks 'likhit' , "likhit",`likhit`
 2. boolean
 0,1 true,false
 3. null = no value assigned 

 // referance type array obj func 


 in java we have dynamically typed variables 
 in other langs int a =5
 a =likhiit not defined a must be an number but in java
  let a = 5
  a =" likhit "
it can  be done


 typeof keyword tell the type of variable 
 let a = "likhit"
 typeof a  will give string 


 type coercion -->  is a concept in which one type automatically converts into another 
 ex "5"+1(here we have 2 diff tyes one is int and other is a string it will automatically typecoercion)=51 
 but "5"-1 = 4

 // truthy and falsy
 0,false,"",null ,nan,document.all these are considered as a falsy 
 to chech we use !!0 = falsey

 ex in if else if(here we take condition that is eitheer true or false)
 so if(0) represent a false condition 
 if(-1) is a true

 operatora--------->>>>
 1. arithmetic . + for addition and concatination ** for power
 2. comparison = assign value
               == compare lhs rhs 12 == '12' will give true it dosent check type
               === check rhs lhs checks type also 
               !=== not equal
 3. logical &&(and) ||(or) !(not)
 4. uranary and ternary a++ ++a --a a--
 ternary = condition ? code if cond is ture : false hui ka code
 12>13 ? console.log("true") : console.log("false")
 since  cond is not true so result is false


as we have typeof similarly we have instanceof of reference data type if we write let a = [] ant then typeof a it will give object not array which is true though but then also we use instanceof keyword
a instanceof Array === true
let b ={}
b instanceof Object == true 


control flow -------->>>>>>>
if(any boolean condition){code}else{code}
if-else if-else if-else
switch case
switch(value){
    case 1:
    break;
    case 2:
    break
    ....so on as needed
}



loops------------>>>>>>
kaha se jaana hain -> kaha tak jana hain = for loop
print number 1to 20 12345... 1se jana h 20 tak jana hain
kaha se jana h -> kab rukna h = while loop
print nuber and stop when i say hello


print 1 to 100
for(let i =1; i<=100;i++){
    console.log(i)
}

start
while(end cond){
    //code
    updation
}

let i = 1;
while(i<=100){
    console.log(i);
    i++;
}

break=exit loop
continue=skip iteration

even number 1 to 20 for loop
for(let i =1 ; i<=20;i++){
    if(i%2===0){
        console.log(i);
    }
}

odd number using while loop
let i =1;
while(i<=20){
 if(i%2!=0){
    console.log(i)
 }
 i++;
}



let num = 5;
for(let i =1;i<=10;i++){
  console.log("5"+""+'*'+i = num*i);
}

let sum =0;
for(let i = 1; i<=100;i++){
    sum = sum+i
}


user input
let val = prompt("enter yur number")


FUNCTIONS------->>>>>>>
 function name(parameter){
    code
 }

 method to create a function
 1. store method in a variable(function expression)
 let fnc = function(){
    console.log("hello");
 }
 fnc();
 2. arrow function(parenthesis+arrow+codeblock)
 let func = () =>{
    console.log("hello");
 }

 parameters and arguments
 // to add dynamic values we use backticks `${here we write dynamic values} and here rest of stuff`
 let f1 = func(name){
    console.log(`${name} is a student`)
 }
 f1(likhit);

function add(v1,v2){
    console.log(`summation is ${v1+v2}`);
}
add(3,6);
if we dont send any value and call function it will give undefined output is NaN for add()
so to tackel this we use default arguments
function add(v1=0,v2=0){
    console.log(v1+v2);
}
add() = 0+0
add(5)=5+0
add(7,9)=7+9

when we have too many arguments so we have to create that any parameters 
func abcd(a1,b1,c1,d1,e1,f1){
    console.log(a1,b1,c1,d1,e1,f1);
}
abcd(1,2,3,4,5,6)
so to tackel this we use rest/spread
we use ...
function abcd(...val){
    console.log(val);
}
abcd(1,2,3,4,5,6,7);

1. return keyword
function abcd(){
    return 12 ;
}
suppose we call this function at 500th line so it will return the value at that line we save return value in any variable
let var = abcd();
console.log(var)=12;


1. first class functions -> which treated as values means we can pass it in function and save it in variable 

2. higher order functions
function that return or accept a function as a parameter
function abcd(){
    return function(){
        code
    }
}
abcd()

or 
function abcd(val){

}
abcd((function){}) in this abcd function at parameter val we passed a function itself

3. pure/impure function
function that doesnot change outside value is pure function.
function that changes outside value is impure function.
ex let a =12
functon abcd(){
    console.log(pure)
}
function abcd(){
    a++
    console.log(`impure function ${a}`)
}

4. clouser a function that returns another function and ther returened function uses any variable of parent function
 function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
 }

5.  IIFE(immediately invoked function expression)
 unnamed function wrapped inside brackets and call it immediately

  (function(){

  })();

 write an arrow function
  let func = (a,b) => {
    return a*b;

  } 

  use rest parameter to accept any nuber of score and return total
  function abcd(...val){
     let total=0;
    abcd.foreach(function(val){
        total=total+val;
       

    })
    return total;

  }
 console.log( abcd(1,2,3,4,5,6,7,3))
  //rest return answer in array form


  pass an functon inside another function and call it

  function abcd(val){
    val();
  }
  abcd(function(){
    console.log("hello");
  })

  output=hello inside abcd we are calling val function whose definition is given at the time of abcd call as an argument.
    discount calculator

    function disccalc(discount){
        retun function(price){
            return price-price*(discount/100)
        }
    }
    let ten=disccalc(10)
    here we call a function to calculate 10 percent discount that is stored in ten now this function itself return a function which is returened and stored in ten so we made a reuseable discount calculator which calculate ten prcnt 20 prcnt discount of any price
    let twenty = discalc(20)
    dis(200);


    function counter(){
        let count =0;
        return function(){
            count++
            return count;

        }
    }
     we call this counter function and store it as it itself return a function 
     let c = counter();now the function is returned to c
     c(); now this c will call the return part that is count++
     console.log this c
     result = 1


ARRAYS----------->>>>>>>>>>>>>
   in js arrays can store multityped values
   let marks = [1,2,3,4,5,6,7,8,9,12];
   starts with 0th index 
   marks[0]=1
   marks[22]=undefined
   we can modify array
   marks[2]=12;
   1,2,12,4,5,6....


   array methods
   let arr = [1,2,3,4,5];
   1. push will insert at end 
       arr.push(6);
       1,2,3,4,5,6
    2. pop will remover from end and return array
    arr.pop();
    1,2,3,4,5
    3. shift remove at start 
    arr.shift();
    2,3,4,5
    4. unshift add at start
    arr.unshift(0);
    0,1,2,3,4,5
    5. splice  (kha se value hatani h , kitni value hatani h)
    arr.splice(2,2);
    will remove 2 values from index 2 so index 2 and 3 are removed
    1,2,5
    6. sclice (does not change array returns a new array copy)(kha se hatana h,kha tak hatana h)

    let arr = [1,2,3,4,5];
    let newarr = arr.slice(0,4) so 0 se 3 tak will remove
    1 2 3 4

    7. reverse = will reverse the main array 
    arr.reverse();
    5,4,3,2,1

    8. sort = will accept an function
    for ascending write a-b
    for desc b-a 
   let sr= arr.sort(function(a,b){return a-b;})

   9. foreach
     array ke har element k liye for each chalega and the under written function will run for each single element of array

     let arr = [11,62,3,4,25]
     arr.forEach(function(val){
        console.log(val)

        // this will print array as each element of array will go into val and for each val the function work here it will console out
     })
     11
     62
     3
     4
     25

    10. map just like for each it will go to each element it will create new array as per returnd values of old array

    let newarr = arr.map(function(val){
        return 12;
    })
    [12,12,12,12,12]
    
    let newarr = arr.map(function(val){
        if(val>10){
            return val
        }
    })

    [11,62,undefined,undefined,25]

 whenever we create a new array as per old one we use map 

11. filter will give new array here we pick old elements as per some conditioning or filter

map mein same size ka naya array banta tha here we create new array and elements will be filtered

let arr = [1,2,3,4,5,6,7,8];
let newarr = arr.filter(function(val){
    if(val>4){
        return true
    }
})
[5,6,7,8]

reduce = will reduce the whole array to a single value

inside function(previousvalue,currentvalue,currentindex[]) we will define accumulator/previous value at end

let ans = arr.reduce(function(accumulator,val){
    return accumulator+val
},0)
start value 0 each element comes in val
accum = 0
0+val val=1
now acc=1
1+val val=2
now acc=3


12. destructuring
 let arr = [1,2,3,4,5,6]
 suppose we want to take out some elements from it in same order
 let[a,b]=arr;
 a=1
 b=2
 let[a,b,,d]=arr;
 a=1
 b=2
 d=4

 13. spread  array is a reference data type meanse any change will reflect in original array
 so to copy we use spread 
 ...=spread it will take all values and spread and give a new copied array any change in new will not reflect on old
 let arr = [1,2,3,4,5,6]
 let newarr = [...arr];



 OBJECT---------->>>>>>>>>>>>>>>
  single entity with its attributes as key value pair 
  let obj ={
    key:value
  }

  obj.attribute==to access

  let obj ={
    name:"likhit",
    age: 21,
    lang: "hindi"
  };
  obj.name==likhit

  const user = {
    name: "likhit",
    address: {
        city: bhopal
        pin: 12343
        location: {
            lat: 21.2
            lng: 112.2
        },
    },
  };
user.address.location.lng=112.2

for in loop
 let obj ={
    name: "likhit"
    age: 22
    height: 12
 }

 for(let key in obj){
    console.log(key,obj[key])
 }
  name likhit
  age 22
  height 11

