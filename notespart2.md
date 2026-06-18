1. <DOM ---------------------------------------------------------------------------------------------------------------------------------------------------------------->
Document Object Model
everything html elemnt is an node of dom
dom is a tree structure of nodes of elements of html web
select node and mainupulate it
// selection 
getElementById ,ByClass,QuerySecelctor,QureyselectorAll
to select any elemt we do
let abcd = document.getelementsbyid('id name')
this will give the node with this id
console.dir(abcd)
1. doc.getelebyclss will give node in html collection its array like format as jo class hoti h wo ek se zyada elemnts ko de sakte h so all nodes comes in this html colection 

2. let abc = documrnt.queryselector("h1") will select the first h1 of web
console.dir(abc)

3. qureySelectorAll will give a node list its also an array like strctr


//Manupulation(select and mainupulate)
1. inner html = will change the html
eg <h1> hello </>
let h1 = document.qureySelector("h1");
h1.innerhtml = "<i>hey</>"
= hey in italic form

2. inner text changing text content 
3. innercontent

// attribute manupulation
attributes = href src lang.....
<a href=""></>
let a = document.queryselector("a")
a.href=hhtps//:www,google.com
or we use set attribute method
a.setattribute("what to change","changed value")
a.setAttribute("href","https://www.google.com")

<img src="" alt="image">
let img = document.qureyselector("img")
img.setattribute("src","imagelink")
to get the value of any attribute we use getAttribute
console.log(img.getAttribute("src"))
to remove any attribute
img.removeAttribute("src")


<qureyselector ids and classes>
<h1 id="start">
const h1 = document.qureyselector("#start");
a.textcontent = "changing by id"

<by class>
document.queryselector(".classname")
<selecting both>
document.queryselector("#myid.myclass")
 <id inside class>
 document.queryselector(".parentclass #childid")
 <multiple selection>
 document.queryselector(".myclass,#myid,tag");


<dynamicDOM -----------creating a new element and appending it !-------------------------------------------------------------------------------------------------------->
// create element
//append it
append=last
prepend=first
let h1 = document.createelement("h1")
h1.textcontent = "created dyanmically";
document.queryselector("body").prepend(h1);

to remove element 
h1.remove();


<styleupdate manuplating css via js>
let h1 = document.queryselector("h1")
h1.textcontent="css change"
h1.style.color = "red";
h1,style.fontfamily="gilroy"; 
h1.style.texttransform="capitalize"


<attachingclass let in css file we created a class which has some style lets say bc changing pattern and we want to add that class  >


let h1 = document.queryselector("h1)
h1.classlist.add("classname");


//remove class
h1.classlist.remove("classnme");


suppose we have a list and we have to add a highlight class which will change red color to every even item in a list 

in css file 
.highlight{
    background-color='red';
    color='white'
}
inside js file 
let li = document.queryselectorall("ul li:nth-child(2n)");
it will return a nodelist
li.foreach(function(element){
    element.classlist.add("highlight");
});


<eventhandling --------------------------------------------------------------------------------------------------------------------------------------------------------->

event listener is used to manage the event and action
`we use .addEventListener("event name",handlingfunction)`
select the element 
add event listener with appropriate event and function

1. change paragraph color red when click
let p = document.queryselector("p");
p.addeventlistener("click",function(){
    p.style.color="red"
})

2. double click color yellow
let p = document.queryselector("p");
p.addeventlistener("dblclick",function(){
    p.style.color="yellow";
});

3. another way of adding and removing function
 let p = document.queryselector("p")
 function eventchnge(){
    p.style.color="yellow";
 };
 p.addeventlistener("dblclick",eventchnge);
 p.removeeventlistener("dblclick",eventchange);

 4. jis bhi type ka event chiye chatgpt the name and type of eventlistener and use it

 5. function(here we accept details which is object here we find many key value attributes)
 example we have to log out whatever we type in input box
 let inp = document.queryselectoe("input");
 inp.addeventlistener("input",function(details){
    console.log(details.data);

    if we click backspace it also console it out as null
    so we do
    i(details.data!==null){
        console.log(details.data);
    }
 })

 6. change event = runs when input , select ya textarea mein koi change aae
 <h3>select your device<\h3>
  <select>
  <option selected disabeled>choose device <\option>(we will see this option but cant select)
   <option> apple<\option>
    <option> samsung<\option>
     <option> oppo<\option>
    <\select> 


let sel = document.queryselector("select");
let device = document.queryselectoe("h3);
// how can we access these selected values
when we fire an event listener on select the function will contain all details of select and eventlistener and changes just explore the details look wich section contain selected values and then access it 
sel.addeventlistener("change",function(details){
    //details.target.value will have selected option so access it and do work 
    device.textcontent = `$(details.target.value) is the selected device`;
});


7. `we have to create something that whatever we type on keybord will comes on our window screen`

 <div id="main">
  <h1>a</>
  </>
  
  *{
    padding=0;
    margin=0;
    fontfamily="gilroy"
    boxsizing=borderbox;

  }

  body{
    width 100%
    height 100%
  }

  #main{
    display flex
    alignitem centre
    justify content centre
    width=100%
    height=100%
    background color=grey;
  }

  h1{
    color white
    font size 10rem
    font weight bolder
    user select none
  }

  `whatever will user type will be seen on window in defined css`
  // here we dont have any input box to type on so we will type on our keybord and event will fire on window `write this on gpt and it will tell the event to fire`
  

  let h1 = document.queryselector("h1");
  windows.addeventlistener("keydown",function(details){
    // explore this details and see where the typed key comes and access it also check what it shows we we click space
    if(details.key==" "){
        h1.textcontent="SPC";
    } else{
        h1.textcontent=details.key;
    }
  });



8. form submit

when we submit form it reloads the page 
which changes js and  dom
so search how to stop form reload on sumission from js
so we use preventdefault
  let form = document.queryselector("form");
  form.addeventlistener("submit",unction(details){
    details.preventDefault();
  })

  9. mouseover 
  jiske upar mouse aaega wo functioning krega

  // lets create a div
  <div id = "abcd"></>;
  //css
  *{
    margin 0 
    padding 0
    box sizing border box
  }
  html,
  body{
    width 100%
    height 100%

  }
  #abcd{
    width 400px
    height 400px
    background color rgb(149, 51, 71);
  }


  //js 
  let div = document.queryselector("div");
  div.addeventlistener("mouseover",function(details){
    div.style.backgroundcolor = "yellow";
  })
  div.addeventlistener("mouseout",function(details){
    div,bc,style="red";
  })

` mousemove===  jaise mouse move hoga function run
   mouseover = event fires exactly once when the mouse ointer moves from outside an element to inside its boundaries
   
   mousemove = event fires continuously every time the mouse moves `

   lets make a project where the div moves with mouse 

   //lets fire mousemove on windows
    windows.addeventlistener("mousemove",function(dets){
      console.log(dets)
      // here when we explore dets we see as we move the mouse on window the x and y axis positioning changes and we get that positioning by exploring dets
    })


 // make divs position absolute 

 let div = document.queryselector("div");
 window.addeventlistener("mousemove",functon(dets){
  div.style.top=dets.clientY="px";
  div.style.left=dets.clientX+"px";
 })   

10. event object 
 function(details) this details = is an event object
 target = jispar actual mein event hua 
 this detail has many methods as its an object methods like / jaha par click kiya
 dets.target
 dets.type
 dets.preventdefault

11. event bubbling 
jispe event aayega agar uspar listener nahi hua toh hamara event uske parent par listener dhundhega and like this move outwards 

ex
<ul>
 <li>
 <li>
 <li>
 <li>
 <li>
 lets say we have an ul with some li items and we want ki jaise hi kisi li par click ho it cuts the lined text and agar cut hain to dubara click karte hi uncut it

 lets create a css class
 .lt{
  text-decoration = line-through;
 }

now instead of adding 5 event listener for each li we can give an listener to parent and as we click on li the event bubble up go to parent  and runs 

let ul = document.qs("ul");
ul.addeventlistener("click",function(dets){
  dets.target.classlist.toggle("lt");

  // toogle = laga hua h toh hata dega warna laga dega 
})


in bubbling agar child k pass event hain fir bhi child ka event run hoga bubble hoke parent par jaega uska event run hoga and bubble hoke uske parent par jaega and uska event run hoga 

12. event capturing 
ulta of bubbling runs from parent to child
read that all part from notes 

by default bubbling hoti h 
 to enable capturing 
 addentlstrn("",func(){

 },
 true//write true 
)


<FORMS AND FORM VALIDATION --------------------------------------------------------------------------------------------------------------------------------------------->
  
<form>
    <input type="text" id = "name" placeholder="write text ">
    <input type="email" placeholder="email">
    <input type = "password" placeholder="password">
    <select>
      <3 options>
    </>
    <textarea palceholder="tell us></>  
  <>  

  // inline validation 
 <input required minlength="3" maxlength="20" type="text" placeholder="write your name"> 

 but we can bypass this part go to inspect and removr that condition thats why we go with js for conditioning and validations


 //regex = is a different code lang chatgpt it and use it 
  let form = document.qs("form");
  form.ael("submit",unction(dets){
    dets.preventdefault();
    const regex=chtgpt;       
  })


<TIMERS AND INTERVALS------------------------------------------------------------------------------------------------------------------------------------------------->  

A function that accepts another function to carry out within a time in milisec
let tm =setTimeout(function(){
  console.log("hello")
},5000)//will log out hello after 5 sec

//setinterval baaar baar chalta after time 
let mn = setInterval(function(){
  console.log("hello")//log out hello after every 5 second
},5000)


cleartimeout(tm);
clearinterval(mn);

<LOCALSTORAGE,COOKIES -------------------------------------------------------------------------------------------------------------------------------------------------->

 `localstorage` = browser ke andar data store karna jo ki browser band hone par bhi delete nhi hoga 
 its browser ka database 
 1. store 
 localStorage.setItem("name","likhit");
 2. fetch
 let val =  localStorage.getItem("name");
 3. remove
  localStorage.removeItem("name");
 4. update
  localStorage.setItem("name","updated name");
 `session storage` = ye temporarily data store karta h as tab band hua dtat got delete
  sessionStorage.setItem("name","likhit");
 `cookies`=store data in browser cookie naam ki property its for less and light data

 document.cookie = "email=sjsjd@gmail.com"

<ENDING ---------------------------------------------------------------------------------------------------------------------------------------------------------------->

