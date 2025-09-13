// function printNames(){
//     document.write("dalmat");
//     document.write("<br>");
//     setTimeout(function () {document.write("fatmirja"); }, 3000);
//     document.write("vlerarti")
// }

// printNames();


var colors= ['red', 'green', 'blue', 'purple'];

function changeColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}

var names=['Lora','Ilma','Elma','Erona','Nita'];

function changeNames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}

setInterval(changeColor, 1000);
setInterval(changeNames, 500);
