setInterval(() => {

    let date = new Date();
    let date_today = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    document.getElementById("date").innerHTML = date_today;

    let clock = new Date();
    let time_today = clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds();
    document.getElementById('time').innerHTML = time_today;

    
}, 1000);




const main = document.querySelector("#main");
const main1 = document.querySelector(".main_1");

let theme = document.getElementById("theme");

theme.addEventListener("click", () => {
    main.classList.toggle("main_theme")
    main1.classList.toggle("main2_theme")
})