const clock = document.getElementById('clock')

 //let date = new date()
// console.log(date.toLocaleTimeString());  it show only console

setInterval(function () {
    let date = new Date();
  
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);

