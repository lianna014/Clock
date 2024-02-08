function Clock(){
 var dateTime = new Date(); 
 var hrs = dateTime.getHours(); 
 var min = dateTime.getMinutes(); 
 var sec = dateTime.getSeconds(); 
 var wt = document.getElementById('wt'); 
   if(hrs >= 12){ 
 wt.innerHTML = 'PM'; 
 }else{ 
 if(hrs > 12){
  hrs = hrs - 12; 
  wt.innerHTML = 'AM'; 
  }
 } 
 document.getElementById('hr').innerHTML = hrs; document.getElementById('mt').innerHTML = min; document.getElementById('sc').innerHTML = sec;
  
  }
  setInterval(Clock, 1000);