
// .1

const bbbb = document.querySelector("header");
bbbb.style.backgroundColor = "yellow";

// .2

const aaaa = document.querySelector("header h1");
console.log(aaaa);
aaaa.style.fontFamily = "Arial Black";
aaaa.innerHTML = "preambuła";


//13.01

// .3

const cccc = document.querySelectorAll("section");
for (const sec of cccc) {
    sec.style.border ="2px solid brown";
}

// .4

const dddd = document.querySelector("section.main_column h1");
console.log(dddd);
dddd.innerText = "Specjalność szefa:";

// .5

const paragraf = document.createElement("p");
paragraf.innerText = "Kebab na frytkach"
const kolumna = document.querySelector(".main_column");
console.log(paragraf);
console.log(kolumna);
kolumna.appendChild(paragraf);

// .6

const usun = document.querySelectorAll("section.side_column h1");
console.log({usun});
usun[1].remove();


//16.01

// .7

const ffff = document.querySelector("footer");
console.log(ffff);
const gggg = document.createElement("div");
ffff.appendChild(gggg);
console.log(gggg);
gggg.style.backgroundColor = "pink";
const hhhh = document.createElement("p");
gggg.appendChild(hhhh);
gggg.innerHTML ="&copy;";
gggg.style.textAlign="center";


// .8

const guovva = document.querySelector("header");
const iiii = document.createElement("p");
const jjjj = document.createElement("p");
iiii.innerHTML = "<i>Pochylony tekst</i>";
jjjj.innerText = "<i>Pochylony tekst</i>";
guovva.appendChild(iiii);
guovva.appendChild(jjjj);


//  .9


const kkkk = document.createElement("section");
const b00dy = document.querySelector("body");


kkkk.style.border ="2px dotted blue";
kkkk.style.paddingTop ="10px";
kkkk.style.paddingBottom ="10px";
kkkk.style.paddingLeft ="20px";
kkkk.style.paddingRight ="20px";

kkkk.innerHTML = "Zderzak";

b00dy.appendChild(kkkk);
