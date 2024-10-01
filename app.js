function updateClock() {
    const clockElement = document.getElementById('clock');
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

// Update the clock every 1 second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial call to display the clock right away without waiting 1 second
updateClock();

let isDavidVisible=false
document.querySelector("#david-btn").addEventListener('click', ()=> {
    if (isDavidVisible==false) {
        document.getElementById('pD').innerHTML='<span class="underline">Balázs Dávid</span>: 17 éves vagyok és kisgyerekkorom óta vonz az informatika, azon belül főként a programozás világa szívott magába, ebben is szeretnék majd a jövőben elhelyezkedni, a legfőbb célom az egyetemen való továbbtanulás'
    } else{
        document.getElementById('pD').innerHTML=""
    }
    isDavidVisible = !isDavidVisible;
    if (isCsabiVisible==true) {
        isCsabiVisible=false
    }
    if (isIstiVisible==true) {
        isIstiVisible=false
    }
})
let isIstiVisible=false
document.querySelector("#isti-btn").addEventListener('click', ()=> {
    if (isIstiVisible==false) {
        document.getElementById('pD').innerHTML="Hello, It is me, Isti"
    } else{
        document.getElementById('pD').innerHTML=""
    }
    isIstiVisible = !isIstiVisible;
    if (isCsabiVisible==true) {
        isCsabiVisible=false
    }
    if (isDavidVisible==true) {
        isDavidVisible=false
    }
})
let isCsabiVisible=false
document.querySelector("#csabi-btn").addEventListener('click', ()=> {
    if (isCsabiVisible==false) {
        document.getElementById('pD').innerHTML="Hello, It is me, Csabi"
    } else{
        document.getElementById('pD').innerHTML=""
    }
    isCsabiVisible = !isCsabiVisible;
    if (isDavidVisible==true) {
        isDavidVisible=false
    }
    if (isIstiVisible==true) {
        isIstiVisible=false
    }
})

let showCount=0
document.querySelector('#show-btn').addEventListener("click", ()=>{
    if (showCount==0) {
        document.getElementById('p-img').innerHTML='<img src="./img/IMG_8475-HDR.jpg" alt="Első Kép" class="img">'
        showCount++
    }else if (showCount==1) {
        document.getElementById('p-img').innerHTML='<img src="./img/IMG_8507-HDR.jpg" alt="Második Kép" class="img">'
        showCount++
    }else if (showCount==2){
        document.getElementById('p-img').innerHTML='<img src="./img/IMG_8551.jpg" alt="Harmadik Kép" class="img">'
        showCount++
    }else if (showCount==3){
        document.getElementById('p-img').innerHTML=''
        showCount=0
    }

    
    
    
})