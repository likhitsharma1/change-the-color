<SCOPE ----------------------------------------------------------------------------------------------------------------------------------------------------------------->

1. functionscope
2. global scope
3. block scope

`EXECUTION CONTEXT`  when we write any function js makes an execution contxt this is a process run in two phases in which first memory phase where memory is allocated  and next is execution phase 


`lexical and dynamic scoping` js mein lexical scoping chalti hain in lexical scoping physical exsistance defines what area we can access in entire code
function abc(){
    let a =12;
    function bsc(){
        console.log(a)
        as a is present in function abcd so a can access whatever we define inside abcd 
    }
}


`clouser` clousers are functions jo kisi parent fnc ke andar ho aur andar wale function ka kuch return kare it returns any variable of parent 

use
we can make private variable by clousers we can preserve variables



<THIS-KEYWORD ------------------------------------------------------------------------------------------------------------------------------------------------------------------------>

`this keyword is a special keyword as it nature changes as per the scope in it we use it `

1. //global scope
console.log(this);//gloval scope me this ki value window hoti hain 

2. //functionscope
function abcd(){
    console.log(this);
}
abcd() // function scope mein bhi this ki value window hoti hain 

3. //method
 method = a function defined inside an object
 let obj={
    name:"likhit",
    sayname: function (){
        console.log(this);
    },
 };
 obj.sayname();
 object ke andar this will point out or denote that particular object
 console.log(this.name)//iss particular object ke andar k attributr ki value dega that is likhit

4. //Event Handler
 event handler mein this wahi hoga jis par event handler laga hain 
  document.queryselectoe("h1").addeventlistener("click",function(){
    console.log(this.style.color="red")
  })
  here this is our h1 so on clicking h1 will turn red 

5. arrow function hamesha this ki value apne parent se leta h


<MANNUAL-BINDING --------------------------------------------------------------------------------------------------------------------------------------------------------->
`function ko call karte time we can set this ki value as per as `
using the three concepts
call,apply,bing

lets say we made an object and a function 
this in function = window
but we want ki this in function points to that object we made so to do that
we call our function in a unique way

let obj={
    name: "likhit",
    age: 20
};
 function abcd(){
    console.log(this.name);
 }
 abcd.call(obj) -----> likhit


we can use bind also if we have more parameters to pass but it does not call function
 function abcd(a,b,c){
    console.log(this)//this part will access object
 }

 let fnc = abc.bind(obj,1,2,3);
 //bind return new function where this=obj
fnc();



<EXAMPLE------------------------------------- -------------------------------------------------------------------------------------------------------------------------->

add or remove user on submitting form
let form = doc.qs("form");
let form = doc.qs("#name");
let form = doc.qs("#bio");
let form = doc.qs("#role");
 const user={
    user: [],
    init: function(){
       <!-- form.addeventlistener();
        //if we use this inside our hadler it will point to our from as handler mein thisusko point karta hain jispe event laga ho but we want to access our object soo
    } -->

    form.addeventlistener("submit",this.submitform.bind(this));

   <here we created a function using this which says ki is object ka function named submitform which will binded and here value of this is our object since bind itself gives a binded duplicate functio>

   submitform: function(e){
    e.preventdefault();
    console.log("submitted")
    this.adduser();
    <!-- jaise hi form submit hoga it will run the method of object and perform task -->
    
   },
    
    }

    adduser: function (){
         this.user.push({
        name: name.value,
        role: role.value,
        bio:,bio.value
    
    })

    form.reset();

    }

    removeuser: function(){}

 }    



 <OBJECT-ORIENTED-PROGRAMMING -----------------------------------------------------------------------------------------------------------------------------------------> 

 we have to make factories /blueprint from which we can make different objects with different values 

 new keyword will create a blank object and this point to that object 

 function createpencil(name,price,color,company){
    this.name = name;
    this.color= color;
    this.company= company;
      this.write = function(){
        let h1 = document.createelement("h1")
        h1.textcontent = `your pencil is $(name)`;
        h1.style.color = color ;
        document.body.append(h1);

      };
 }

 <!-- now we will allocate or create object of blueprint using this keyword -->

 let pencil1 = new createpencil("natraj",10,"red","natraj");
 pencil1.write();
 
 let pencil1 = new createpencil('doms',20,"blue","doms");
 pencil2.write();

` suppose we have company = natraj for all so we will not write it inside const function as it will allocate space again and again we will use prototye`

<agar constructor function koi field apne prototype par attach karle to us constructor se banne wale har instance/object ke pass wo field automatically chali jati h>

cretaepencil.prototype.company = "natraj"
ab createpencil se jo bhi instance banega it has the acces to this attribue

prototype = shared memory

where to use 
createpencil.prototype.write = function(){
    
        let h1 = document.createelement("h1")
        h1.textcontent = `your pencil is ${this.name}`;
        h1.style.color = this.color ;
        document.body.append(h1);

      
 }


class Createpencil{
    //constfunc
    createpencil(name,price,color,company){
    this.name = name;
    this.color= color;
      }
   //method
      write(){
        let h1 = document.createelement("h1")
        h1.textcontent = `your pencil is $(name)`;
        h1.style.color = color ;
          }    document.body.append(h1);

          erase(){
            doc.body.qsa("h1").foreach(function(el){
                el.remove();
            })
          }


}



<synchorous/Asynchoronous --------------------------------------------------------------------------------------------------------------------------------------------- >

koi bhi code js mein line by line chalega but sometime a part of code waites for its execution and itne mein dusra code chlata hain like 

console.log("part-1")
console.log("part-2")
settimeout(() => {
  console.log("part-3")
},2000);
console.log("part-4")

<!-- result
part1
part2
part4
part3 -->

`SYNC-CODE` jo line by line chalein
`ASYNC-CODE` jo after a time chalein 


ek function ke andar ek functin bhejte hain so that parameter wala function is calles callback 


function profile(username,fnc){
  settimeout( ()=>{
    fnc({username,age:26,email:"xyz@gmail.com"});
  },2000);
}

profile("harsh",function(data){
  console.log(data)
})

<!-- this is an async code 
profile function is an hid=gher order function it takes two arguments a string and another function as a callback 
set timeout in it  wait for 2sec then execute the arrow function in it 
after 2sec it call fnc and passes an object containing username age and email 
when we call profile function with harsh and a function we pass a function as second argument this function only runs once the settimeout finishes -->



<PROMIS ---------------------------------------------------------------------------------------------------------------------------------------------------------------->
hum ek promise banate hain jo ki 2 states mein se ek state mein jaa sakta hain and wo promise ya toh resolve hoga ya reject hoga ab kya hoga that we dont now but we have to write code for both 

let pr = new promise(function(res,rej){
  settimeout( ()=>{
    <!-- lets say we are generating a random number jo if grater thn 5 it will resolve else reject after 5 sec -->
    let rn = math.floor(math.random()*10);
    if(rn>5){
      res(rn);
    } else rej(rn);
  },3000)
  <!-- here we created a promise that will be resolved after 3 sec
  jab tak ye promise resolve nhi ho jata tab tak ye pending state mein hoga  -->
})
`agar resolve hua tohbthen chalega warna catch chakega`
 pr
 .then(function(val){
  console.log(val)
 })
 .catch(function(val){
  console.log(val)
 })
  <!-- promise resolve hua toh then wala function chalega resolve karte time jo value bhejenge wo then ke function k val mein aaegi -->


<ASYNC-AWAIT ----------------------------------------------------------------------------------------------------------------------------------------------------------->

aync await .then and catch se bacha leta hain we have to create a function to resolve reject any promise
we use await
let pr = new promise(function(res,rej){
  settimeout( ()=>{
    <!-- lets say we are generating a random number jo if grater thn 5 it will resolve else reject after 5 sec -->
    let rn = math.floor(math.random()*10);
    if(rn>5){
      res(rn);
    } else rej(rn);
  },3000)
  <!-- here we created a promise that will be resolved after 3 sec
  jab tak ye promise resolve nhi ho jata tab tak ye pending state mein hoga  -->
})

async function abcd(){
  try{
    let val = await pr
    console.log(pr)
    <!-- awaite waite karega pr function ka until it resolve or reject as here we stored the output value of pr promise in val -->
  } catch(e){
    console.log(e)
  }
   
   <!-- if pr resolve then resolve hoke jo bhi return karega vo val me aaega and rejected part error ke r mein handle hoga -->
}

at end run this abcd
abcd();


<fetch-api/https(basics) ----------------------------------------------------------------------------------------------------------------------------------------------->
fetch api ki help se hum data mangva sakte hain kisi url se
json format is object type ka format hain 
fetch (url) is url se data laaega since fetch is promise based so we can handle it in 2 ways .then catch or async await

fetch("url") 
  .then((rawdata)=>{
    <!-- //console.log(rawdata);
    fetch se jo data milega that is unreadable so make it in nason format
    so always at fetching time then ke data ko json banao
  }) -->
  <!-- 1. pahle fetched data ko json mein convert karke readable banao and return it -->
  <!-- 2. handle it in 2nd then  -->
  .catch((err)=>{
    console.log(err);
  })

fetch("url")
 .then((rawdata)=>{
  return rawdata.json();
 })
 .then((data)=>{
  console.log(data)
  <!--  from here we can fetch any part of data
  like console.log(data.results[1].name) -->

 })
 .catch((err)=>{
  console.log(err)
 });



<DESIGNING-PATTERNS ---------------------------------------------------------------------------------------------------------------------------------------------------->
module pattern ek design pattern hain jisme hum apna code ek self executing function (IIFE) ke andar likhte hain so that variables and functons private rahein
iske andar hum sirf vahi part return karte h jisse bhaar use karna hain
we use this pattern for data handling clean pattern encapsulation k liye 

`IIFE = IMMIDIETLY INVOKE FUNCTION EXPRESSION` -> an wrapped function with instant call 
let fnc = (fnc(){
  return 12;
  <!-- fnc mein 12 store ho jaega that we use outside -->
})();


we make iife to make private data,function,variables an encapsulated way that cannot be used directly outsie
 let bank = (fnc(){
  let bankbalance = 12000
  function checkbalance(){
    console.log(bankbalance);
  }
  function setbalance(val){
    bankbalance=val;
  }
  function withdrawl(val){
    if(val<=bankbalance){
      bankbalance = bankbalance-val;
      console.log(bankbalance);
    }
   return {
    checkbalance,
    setbalance,
    withdraw
   };
   <!-- we have returened everything to bank so that it can be accesses , here we have returned in object format -->
  }
 })();
  `checkbalance() since our code is in iife so we cant directly acces its inside elements everything inside is private`
 <a. jo bhi iife return karega that will be stored in our bank variable and from there we can access the inside details>


bank.checkbalance();
bank.withdraw(1200);

2. Revealing modular function
we can set our returning data name as wish
return{
  check: checkbalance,
  set: setbalance,
  draw: withdraw,
}
 bank.check();
 bank.set(123);


3. `FACTORY-FUNCTION-PATTERN`


1. is a function jo objects create karta hain 
 its a design pattern jisme hum ek simple function create karte hain jo naye objects banakar return karta hain bina class ya new keyword ki help se
2.  is pattern ka main idea hain object creaton ko ek function k through manage karna
3.    har bar jab hum function call karenge ek new object banega with methods
4.      this pattern specially useful when we have to create same type of objects like user,product,task etc


<OPTIMIZATION ---------------------------------------------------------------------------------------------------------------------------------------------------------->


1. Debouncing
Definition:
Debouncing ensures that a function is executed only after a certain period of inactivity.
It’s useful for events that fire rapidly (e.g., resize, keyup) but where you only want the final action after the user stops triggering the event.

Example Use Cases:

Search box suggestions (wait until the user stops typing)
Window resize event handling
// Debounce function
<!-- function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Reset timer on every call
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example: Search input handler
function fetchData(query) {
    console.log("Fetching data for:", query);
}

const debouncedFetch = debounce(fetchData, 500);

document.getElementById("search").addEventListener("input", (e) => {
    debouncedFetch(e.target.value);
});
How it works:
If the user types continuously, the timer resets each time. The function runs only after the user stops typing for 500ms. -->

2. Throttling
Definition:
Throttling ensures that a function is executed at most once in a specified time interval, no matter how many times the event is triggered.

Example Use Cases:

<!-- Scroll position tracking
Mouse movement tracking
Button click rate limiting
// Throttle function
function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Example: Scroll handler
function logScrollPosition() {
    console.log("Scroll position:", window.scrollY);
}

const throttledScroll = throttle(logScrollPosition, 1000);

window.addEventListener("scroll", throttledScroll); -->



Key Differences Table
Feature	Debouncing	Throttling
Execution	After a pause in events |	At regular intervals
Use Case	Wait until user stops typing/resizing	|Limit execution rate for continuous events
Example Delay	Runs once after 500ms of inactivity|	Runs every 1s while event is active


<LAZY-LOADING-IMAGES --------------------------------------------------------------------------------------------------------------------------------->


