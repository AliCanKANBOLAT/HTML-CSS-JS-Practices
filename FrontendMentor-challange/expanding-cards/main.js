const area = document.querySelectorAll('.area');

area.forEach( item => {
  item.addEventListener("click", () =>{
    removeOpen();
    item.classList.add("open");
  })
})
 function removeOpen () {
  area.forEach(object => {
    object.classList.remove("open")
  } )
 }


