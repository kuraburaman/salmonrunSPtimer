let intervalId; // タイマーIDを保持する変数
let timer = 100; // タイマーの初期値
let timer2 = 12; // タイマーの初期値
const sound1 = new Audio('audio1.mp3'); // 音声ファイル
const sound2 = new Audio('audio2.mp3')
const sound3 = new Audio('audio3.mp3')
const sound4 = new Audio('audio4.mp3')
const sound5 = new Audio('start.mp3')
const sound6 = new Audio('stop.mp3')
const sound7 = new Audio('reset.mp3')
const Countsound12 = new Audio('chakuchi.mp3')
const Countsound10 = new Audio('10.mp3')
const Countsound9 = new Audio('9.mp3')
const Countsound8 = new Audio('8.mp3')
const Countsound7 = new Audio('7.mp3')
const Countsound6 = new Audio('6.mp3')
const Countsound5 = new Audio('5.mp3')
const Countsound4 = new Audio('4.mp3')
const Countsound3 = new Audio('3.mp3')
const Countsound2 = new Audio('2.mp3')
const Countsound1 = new Audio('1.mp3')
const elements = document.getElementsByName("options");
let countdown;

sound1.load();
sound2.load();
sound3.load();
sound4.load();
sound5.load();
sound6.load();
sound7.load();
Countsound12.load();
Countsound10.load();
Countsound9.load();
Countsound8.load();
Countsound7.load();
Countsound6.load();
Countsound5.load();
Countsound4.load();
Countsound3.load();
Countsound2.load();
Countsound1.load();

function startCountdown(num) {
    timer2 = num;
    clearInterval(countdown);    
    document.getElementById('timer2').textContent = timer2; 
    timer = 100;
    clearInterval(intervalId);
    document.getElementById('timer').textContent = timer; 
    let soundName = "Countsound" + num;
    eval(soundName + ".play()"); 
    let count = num - 1;
    countdown = setInterval(() => {
      timer2--;
      if (timer2 < 0) {
        timer2 = 0;
      }
      document.getElementById('timer2').textContent = timer2; 
      if (count == 0) {
        clearInterval(countdown);
        startTimer()
      }
      switch (count) {  
        case 0:
          break;
        case 1:
          Countsound1.play();
          break;
        case 2:
          Countsound2.play();
          break;
        case 3:
          Countsound3.play();
          break;
        case 4:
          Countsound4.play();
          break;
        case 5:
          Countsound5.play();
          break;
        case 6:
          Countsound6.play();
          break;
        case 7:
          Countsound7.play();
          break;
        case 8:
          Countsound8.play();
          break;
        case 9:
          Countsound9.play();
          break;
        case 10:
          Countsound10.play();
          break;
        case 11:
          break;
        case 12:
          Countsound12.play();
          break;
      }
      count--;
    }, 1000);
  }

document.getElementById("CountBtn1").addEventListener("click", () => {
  startCountdown(1);
});
document.getElementById("CountBtn2").addEventListener("click", () => {
  startCountdown(2);
});
document.getElementById("CountBtn3").addEventListener("click", () => {
  startCountdown(3);
});
document.getElementById("CountBtn4").addEventListener("click", () => {
  startCountdown(4);
});
document.getElementById("CountBtn5").addEventListener("click", () => {
  startCountdown(5);
});
document.getElementById("CountBtn6").addEventListener("click", () => {
  startCountdown(6);
});
document.getElementById("CountBtn7").addEventListener("click", () => {
  startCountdown(7);
});
document.getElementById("CountBtn8").addEventListener("click", () => {
  startCountdown(8);
});
document.getElementById("CountBtn9").addEventListener("click", () => {
  startCountdown(9);
});
document.getElementById("CountBtn10").addEventListener("click", () => {
  startCountdown(10);
});
document.getElementById("CountBtn12").addEventListener("click", () => {
  startCountdown(12);
});

function startTimer() {
  timer2 = 0;
  clearInterval(countdown);
  document.getElementById('timer2').textContent = timer2;
  sound5.play();
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    timer--;
    if (timer < 0) {
      timer = 0;
    }
    document.getElementById('timer').textContent = timer;
    if (elements[0].checked){
      if (timer == 50){
        sound2.play();
      }
    }
    if (elements[1].checked){
      if (timer == 50){
        sound2.play();
      } else if (timer == 25){
        sound3.play();
      }
    }
    if (elements[2].checked){
      if (timer == 70){
        sound1.play();
      }
      if (timer == 50){
        sound2.play();
      }
      if (timer == 30){
        sound3.play();
      }
      if (timer == 15){
        sound4.play();
      }
    }
    if (timer == 0) {
        timer = 100;
        timer2 = 12;
        clearInterval(countdown); 
        clearInterval(intervalId);
        document.getElementById('timer').textContent = timer;
        document.getElementById('timer2').textContent = timer2;
    }
  }, 1000);
}

function stopTimer() {
  sound6.play();
  clearInterval(countdown); 
  clearInterval(intervalId);
}

function resetTimer() {
  sound7.play();
  timer = 100;
  timer2 = 12;
  clearInterval(countdown); 
  clearInterval(intervalId);
  document.getElementById('timer').textContent = timer;
  document.getElementById('timer2').textContent = timer2;
}
