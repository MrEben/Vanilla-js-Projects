
const about=document.querySelector('.about');
const content=document.querySelectorAll('.content')
const btns=document.querySelectorAll('.tab-btn')
about.addEventListener('click',function (e) {
    // console.log(e.target.dataset.id);
    const id=e.target.dataset.id;
    if(id){
        btns.forEach(function (btn) {
           btn.classList.remove('active') 
           e.target.classList.add('active')
        });
        content.forEach(function (contents) {
            contents.classList.remove('active')
        });
    }
    const element=document.getElementById(id)
    element.classList.add('active')
})