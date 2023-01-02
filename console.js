// możemy wpisywac teksty, liczny itp.
console.log("Witaj świecie");

//możemy wpisać obiekt i do zbadać
console.log(window);

//po przecinku możemy wypisać kilka elementów na raz
console.log("Witaj", window, 100);

//pokaże w konsoli ładnie sformatowaną tabelę
console.table(["jeden", 2, 3, 4, 5]);

//grupowanie wielu tekstów (console.log etc) w konsoli w jedną grupę

console.group("Nazwa grupy");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //Kończenie grupy

console.groupCollapsed("Nazwa grupy");  //grupa domyslnie zwinieta
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //kończenie grupy

//czasami bedziemy chcieli sprawdzic jak szybko wykona się nasz skrypt...

console.time("test 1"); // rozpoczyna test - zaczyna liczyc czas

for (let i = 0; i < 100000; i++) {
    ;
}

console.timeEnd("test 1"); //konczy test

//czasami tez bedzimey chcieli zatrzymac na chwile dzialaniue skryptu w danym miejscu
function test() {
    let i = 0;
    //debugger; //instrukcją debugger przerywam dzialanie skryptu w tym miejscu, dzieki czemu moge spokojnie go badac w zakladce Source. Dodatkowo w konsoli mam dostep do zmiennych z danego scope
}
test();


//ZMIENNE

var text = "ala";
text= "Janek ma żyrafę"; //wszystko ok bo var to zmienna
console.log(text);

let a = 0;
a = 10; //wszystko ok, bo let
console.log({a});  //tu są nawiasy klamrowe

const b = 0;
//b = 10;  //blad - do stalej nie mozemy przypisac nowej wartosci
console.log(b)

const name = "Ala";
//name = "Monika"; //błąd
console.log(name)



