/* Nav*/
document.querySelector('.arrow_nav').addEventListener('click', event => {
    
    event.preventDefault();
    
    document.querySelector('.nav_show').classList.toggle('showed'); 
    document.querySelector('.arrow_nav').classList.toggle('clicked');
    document.querySelector('.sidebar_nav').style.add.color = ('#fff');  
    
    
})

document.querySelector('.menu_button').addEventListener('click', event => {
    
  event.preventDefault();
  
  document.querySelector('.nav_show').classList.toggle('showed'); 
  
  
  
})

document.querySelector('.close_button').addEventListener('click', event => {
   
    document.querySelector('.nav_show').classList.toggle('showed'); 
    document.querySelector('.arrow_nav').classList.toggle('clicked');  
})




