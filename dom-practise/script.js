const button = document.querySelectorAll('.btn');
const body = document.body;
const heading=document.querySelector('h1');
const random=document.querySelector('#random');
button.forEach(function(button){
    button.addEventListener('click', function(e){
       console.log(e.target);
       if(e.target.id=='btn1'){
        body.style.backgroundColor='black';
        heading.style.color='white';
       }
       if(e.target.id=='btn2'){
        body.style.backgroundColor='red';
        heading.style.color='lightseagreen';
       }
       if(e.target.id=='btn3'){
        body.style.backgroundColor='purple';
        heading.style.color='white';
       }
       if(e.target.id=='btn4'){
        body.style.backgroundColor='yellow';
        heading.style.color='white';
       }
    })
})


random.addEventListener('click', function(e) {
    // Generate THREE distinct random numbers between 0 and 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    // Pass them individually into the string
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});