
let incre = document.getElementById("incre");

let head2 = document.getElementById("head2");
let dua2 = document.getElementById("duaimg");
let meaning = document.getElementById("meaning");

let audio = document.getElementById("audio");



let change = document.getElementById("img2");





let num2 = 0;
let play = document.querySelector(".play");

play.addEventListener("click",function(){
    if(num2 == 0){
    audio.play();
    change.src = "../images/pause.png";
    num2 = 1;
    }else{
        num2 = 0;
      change.src = "../images/play2.png";
    audio.pause();
    }

})

let imgarr = [
    {
        head2s:"سورة الفلق",
        meanings : "قُلۡ اَعُوۡذُ بِرَبِّ الۡفَلَقِۙ‏.مِنۡ شَرِّ مَا خَلَقَۙ‏.وَمِنۡ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ‏ <br> وَمِنۡ شَرِّالنَّفّٰثٰتِ فِىۡ الۡعُقَدِۙ‏.وَمِنۡ شَرِّ حَاسِدٍ اِذَا حَسَدَ",
        img2 :  "../images/quraan.jpg",
    },
   {
        head2s:"سورة الناس",
        meanings :"قُلۡ اَعُوۡذُ بِرَبِّ النَّاسِۙ. مَلِكِ النَّاسِۙ.اِلٰهِ النَّاسِۙ‏ .مِنۡ شَرِّ الۡوَسۡوَاسِ الۡخَـنَّاسِ <br> الَّذِىۡ يُوَسۡوِسُ فِىۡ صُدُوۡرِ النَّاسِۙ. مِنَ الۡجِنَّةِ وَالنَّاسِ.  ‏ ",
        img2 :  "../images/quraan.jpg",

    },  
]

let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 2){
        num1 = 0;
    head2.innerHTML = imgarr[num1].head2s;
    meaning.innerHTML = imgarr[num1].meanings;
    audio.src = imgarr[num1].audios;
    
    }else{
    head2.innerHTML = imgarr[num1].head2s;
    meaning.innerHTML = imgarr[num1].meanings;
    audio.src = imgarr[num1].audios;


    num1++;

    }
})

