let [milliseconds, seconds, minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int;

document.getElementById('startTimer').addEventListener
('click', ()=> {
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=> {
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=> {
    clearInterval(int);
    [milliseconds, seconds, minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000'
});

function displayTimer() {
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds;
    milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${h} : ${m} : ${s}: ${ms}`
}

//Os Quadrados

const ulSquares = document.querySelector(".squares")

for (let i = 0; i < 11; i++) {
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10, 120))
    const position = random(1, 99)
    const delay = random(5, 0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`

    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

    ulSquares.appendChild(li)
}
