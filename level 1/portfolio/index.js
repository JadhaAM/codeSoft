
let navBtn = document.querySelector('#navbtn');
let closeBtn=document.querySelector('#close');
let wraper = document.querySelector('.wraper');
navBtn.addEventListener('click',()=>{
 wraper.style.display = 'block';
 wraper.classList.add('wraper-ani');
});

closeBtn.addEventListener('click',()=>{
    wraper.style.display = 'none';
})
