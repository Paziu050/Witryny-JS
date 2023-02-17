document.querySelector('#przycisk').addEventListener('click',
function(){

const haszes = document.querySelector('h6');
haszes.innerHTML = "<i>Świetnie<i>";
})

document.querySelector('#przycisk2').addEventListener('click',
function(){
const hapie = document.querySelector('h5');
hapie.innerText = "<i>Świetnie<i>";
})


document.querySelector('#przycisk3').addEventListener('click',
function(){
const diwyy = document.querySelector('#dobradobra');
console.log(diwyy);
const elementy = diwyy.querySelectorAll('*');
console.log(elementy);
for (const kox of elementy){
    if (kox.tagName=='STRONG'){
    kox.style.border="10px dotted green";
   }
}})

document.querySelector('#przycisk4').addEventListener('click',
function(){
    const peee = document.querySelector('#ESSA');
    console.log(peee);
    
}
)
