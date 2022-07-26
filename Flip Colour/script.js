const colours = ["red", "blue", "yellow", "brown", "orange"];
const text = document.querySelector('.selected');
const button = document.querySelector('.click');
button.addEventListener('click', function () {
    const random = getRandom()
    document.body.style.background = colours[random];
    text.textContent = colours[random]
});
function getRandom() {
    return Math.floor(Math.random() * colours.length)
}