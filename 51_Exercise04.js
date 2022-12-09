
setInterval(function(){
    let d = new Date();

    document.getElementById("dates").innerText = d.getDate();
    document.getElementById("hours").innerText = d.getHours();
    document.getElementById("minutes").innerText = d.getMinutes();
    document.getElementById("seconds").innerText = d.getSeconds();
},1000);
