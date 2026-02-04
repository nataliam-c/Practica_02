divs = document.getElementsByTagName("div");
console.log(divs);
for (let i = 0; i <= divs.length; i++){


    divs[i].innerHTML += "<h3 class=tarjeta"+i+"> Tabla del " + (i+1) + "</h3>";  
    for(let numero = 1; numero <= 10; numero++){
        divs[i].innerHTML += "<p>"+(i+1)+" x "+numero+" = "+(i+1)*numero+"</p>";  
        
    }
}

