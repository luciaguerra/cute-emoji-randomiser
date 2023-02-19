let emojis = ["😸", "😺", "😼","😽","😿","😾","🤍","💭","💌","💕","🫶🏻", "🫰🏻", "🧚🏻‍♂️", "🐶", "🐷", "🐩", "🐮", "🐭", "🐁", "🐰", "🐇", "🦔", "🐻‍❄️", "🐥", "🦢", "🕊️", "🦭", "🦋", "🐚", "🌸", "🐞", "🪷", "🌱", "🌿", "🪴", "🥞","🥐", "🍓","🍒","🍥","🍦","☕","🧋","🧁","🎂","🍰","🍮","🍩","🍨","🌙","⭐","☁️","⛈️","🌬️","⛄","🌧️","🌨️","✨","🎀","🎨","🩰","🕯️","📓","✉️","🖇️","🗒️","🪞","🫧","🧺"];

let showEmoji = document.getElementById("show-emoji");
let getEmoji =document.getElementById("get-emoji");

getEmoji.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * emojis.length);

    showEmoji.textContent = emojis[randomIndex];
})