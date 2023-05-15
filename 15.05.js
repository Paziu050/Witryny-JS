

const konrado = document.getElementById('sima');
console.log(konrado);
for(i=1;i<101; i++){

    const elementy = document.createElement("input");
    konrado.appendChild(elementy);
   
   elementy.value="Element numer "+i;
   elementy.setAttribute("id", i)
   elementy.setAttribute("name", i)
   elementy.setAttribute("style", "margin: 10px; box-shadow: 5px 5px 5px lightblue;")
   elementy.setAttribute("placeholder", "Element numeru n")
   
   if(i%5 === 0){
    const przerwa = document.createElement("br")
    konrado.appendChild(przerwa);
}
}


