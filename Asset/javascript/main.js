
let incre = document.getElementById("incre");
let dicre = document.getElementById("dicre");
let audio = document.getElementById("audio")
let dua = document.getElementById("dua");
let dua2 = document.getElementById("duaimg");
let meaning = document.getElementById("meaning");
let heading = document.getElementById("head");

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
        duas :  "اَللّٰھُمَّ اِنِّیْ اَسْئَلُكَ خَیْرَالْمَوْلَجِ وَخَیْرَالْمَخْرَجِ",
        meanings : "اے اللہ عَزَّ وَجَلَّ ! میں تجھ سے داخل ہونے <br> نکلنے کی جگہوں کی بھلائی <br> طلب کرتا ہوں ۔",
        img2 :  "../images/enter home.gif",
        audios : "../audio/GharMeDakhilHoneKiDua.mp3",
        
    },
     {
        


    }
   
   
]

let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 2){
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
