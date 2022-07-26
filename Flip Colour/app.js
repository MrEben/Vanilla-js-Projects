const colours=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const text=document.querySelector('.selected');
const button=document.querySelector('.click');
button.addEventListener('click',function () {
    let hexColour='#';
    for (let  i= 0; i < 6;i++) {
        hexColour+=colours[getRandom()]
    };
    document.body.style.background=hexColour;
    text.textContent=hexColour
});
function getRandom() {
    return Math.floor(Math.random()*colours.length)
}