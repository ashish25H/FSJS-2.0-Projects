const clock = document.getElementById("clockContainer");





setInterval(() => {

let a = new Date();

    clock.innerHTML = `
      
<div class="time">
<h1><p>${(a.getHours < 10 ? "0" : "") + a.getHours()} : </p></h1>
<h1><p> ${(a.getMinutes() < 10 ? "0" : "") + a.getMinutes()} : </p></h1>
<h1><p> ${(a.getSeconds() < 10 ? "0" : "") + a.getSeconds()}  </p></h1>
</div>

<div class="date">
<h5><p>${(a.getDate() < 10 ? "0" : "") + a.getDate()}/${a.getMonth() + 1}/${a.getFullYear()}</p></h5>
</div>

`;

}, 1000);


