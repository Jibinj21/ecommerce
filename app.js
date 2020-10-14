let menuItem = document.getElementById("menuItem");
let menuIcon = document.querySelector(".menu-icon");

console.log(menuIcon);
menuItem.style.maxHeight = "0px";


  menuIcon.addEventListener('click', () =>{
     
       if(menuItem.style.maxHeight == "0px"){
        
        menuItem.style.maxHeight = "200px"
       }else{
        menuItem.style.maxHeight = "0px"
       }
   });
        
