
const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();
  
    var hours   =  currentTimeDate.getHours();

    var minutes =  currentTimeDate.getMinutes();
    var seconds =  currentTimeDate.getSeconds();
    console.log(hours, minutes,seconds);
   
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

     setTimeout(getCurrentTimeDate, 1000);

}
getCurrentTimeDate();