// const w = document.querySelector('.w')
// const a = document.querySelector('.a')
// const s = document.querySelector('.s')
// const d = document.querySelector('.d')
// const j = document.querySelector('.j')
// const k = document.querySelector('.k')
// const l = document.querySelector('.l')

const button = document.querySelectorAll('.drum');
const numberOfButton = button.length;
function keyDown (event) {
  const activeButton = document.querySelector('.'+ event);
  activeButton.classList.add("pressed")
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100)
  activeButton.style.color = ('black');
setTimeout(function(){
  activeButton.style.color= ('#DA0463');
},100)
}

for (let i = 0; i < numberOfButton; i++) {
  button[i].addEventListener("click", function () {
    var key = this.innerHTML;
    // console.log(this)

    switch (key) {
      case "w":
        var audio = new Audio('/sounds/crash.mp3');
        audio.play();
        keyDown(key);
        break;
      case "a":
        var audio1 = new Audio('/sounds/kick-bass.mp3');
        audio1.play();
        keyDown(key);
        break;
      case "s":
        var audio2 = new Audio('/sounds/snare.mp3');
        audio2.play();
        keyDown(key);
        break;
      case "d":
        var audio3 = new Audio('/sounds/tom-1.mp3');
        audio3.play();
        keyDown(key);
        break;
      case "j":
        var audio4 = new Audio('/sounds/tom-2.mp3');
        audio4.play();
        keyDown(key);
        break;
      case "k":
        var audio5 = new Audio('/sounds/tom-3.mp3');
        audio5.play();
        keyDown(key);
        break;
      case "l":
        var audio6 = new Audio('/sounds/tom-4.mp3');
        audio6.play();
        keyDown(key);
        break;
      default:
        console.error("Bilinmeyen tuş: ", key);
    }
  });
}
document.addEventListener('keypress',function (event){
  var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
  switch (keyPressed) {
    case "w":
        var audio = new Audio('/sounds/crash.mp3');
        audio.play();
        keyDown(keyPressed);
        break;
      case "a":
        var audio1 = new Audio('/sounds/kick-bass.mp3');
        audio1.play();
        keyDown(keyPressed);
        break;
      case "s":
        var audio2 = new Audio('/sounds/snare.mp3');
        audio2.play();
        keyDown(keyPressed);
        break;
      case "d":
        var audio3 = new Audio('/sounds/tom-1.mp3');
        audio3.play();
        keyDown(keyPressed);
        break;
      case "j":
        var audio4 = new Audio('/sounds/tom-2.mp3');
        audio4.play();
        keyDown(keyPressed);
        break;
      case "k":
        var audio5 = new Audio('/sounds/tom-3.mp3');
        audio5.play();
        keyDown(keyPressed);
        break;
      case "l":
        var audio6 = new Audio('/sounds/tom-4.mp3');
        audio6.play();
        keyDown(keyPressed);
        break;
      default:
        console.error("Bilinmeyen tuş: ", key);
  }
})
 

  // document.addEventListener('keypress', function(event) {
  //   console.log(event)
  // })
  // console.log(this.innerHTML) 
  
  


// w.addEventListener("click", () => {

//   var audio = new Audio ('/sounds)/crash.mp3');
//   audio.play();
// }) 

// a.addEventListener("click", () => {
//   var audio = new Audio ('/sounds/kick-bass.mp3');
//   audio.play();
  
// }) 
// s.addEventListener("click", () => {

//   var audio = new Audio ('/sounds/snare.mp3');
//   audio.play();
// }) 
// d.addEventListener("click", () => {
//   var audio = new Audio ('/sounds/tom-1.mp3');
//   audio.play();
// }) 
// j.addEventListener("click", () => {

//   var audio = new Audio ('/sounds/tom-2.mp3');
//   audio.play();
// }) 
// k.addEventListener("click", () => {

//   var audio = new Audio ('/sounds/tom-3.mp3');
//   audio.play();
// }) 
// l.addEventListener("click", () => {
//   var audio = new Audio ('/sounds/tom-4.mp3');
//   audio.play();
  
// }) 





 