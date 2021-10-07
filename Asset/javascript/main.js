
let incre = document.getElementById("incre");
let audio = document.getElementById("audio");
let dua = document.getElementById("dua");
let dua2 = document.getElementById("duaimg");
let meaning = document.getElementById("meaning");
let heading = document.getElementById("head");

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
        head : "بارش کے وقت کی دعا",
        duas :  "َاللَّهُمَّ صَيِّبَاً نَافِعَاً"
,
        meanings : "اے اللہ اسے نفع دینے والی بارش بنا دے",
        img2 :  "../images/clouds.gif",
        audios : "../audio/barsih ke waqt ki dua.mp3",

    },
   {
      head : "گھر میں داخل ہوتے وقت کی دعا",
        duas :  "اَللّٰھُمَّ اِنِّیْ اَسْئَلُکَ خَیْرَالْمَوْلِجِ وَخَیْرَالْمَخْرَجِ  بِسْمِ اللّٰہِ وَلَجْنَا وَبِسْمِ <br> اللّٰہِ خَرَجْنَا وَعَلَیاللّٰہِ رَبِّنَا تَوَکَّلْنَا ۔",
        meanings : "اے اللہ !میں سؤال کرتا ہوں آپ سے اچھے داخلہ کا اور اچھی طرح نکلنے کا ،اللہ کے نام سے میں داخل ہوا <br> ،اللہ کے نام سے میں نکلااوراپنے رب اللہ پر میں نے بھروسہ کیا ۔",
        img2 :  "../images/enter home (2).gif",
        audios : "../audio/GharMeDakhilHoneKiDua.mp3",
        
    },
     {
         head : "غصہ آنے کے وقت کی دعا",
        duas :  "أَعُوذُ بِاللّٰہِ مِنَ الشَّيْطٰنِ الرَّجِيمِ",
        meanings : "میں شیطان مردود سے اللہ عزوجل کی پناہ چاہتا ہوں",
        img2 :  "../images/angry.webp",
        audios : "../audio/GharMeDakhilHoneKiDua.mp3",

    }
   
   
]

let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 3){
        num1 = 0;
        heading.innerHTML = imgarr[num1].head;
    dua.innerHTML = imgarr[num1].duas;
    meaning.innerHTML = imgarr[num1].meanings;
    dua2.src = imgarr[num1].img2;
    audio.src = imgarr[num1].audios;
    

    
    }else{
        heading.innerHTML = imgarr[num1].head;
    dua.innerHTML = imgarr[num1].duas;
    meaning.innerHTML = imgarr[num1].meanings;
    dua2.src = imgarr[num1].img2;
    audio.src = imgarr[num1].audios;


    num1++;
    }
})
