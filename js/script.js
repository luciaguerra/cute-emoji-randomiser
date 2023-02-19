let emojis = ["😸", "😺", "😼","😽","😿","😾","🤍","💭","💌","💕","🫶🏻", "🫰🏻", "🧚🏻‍♂️", "🐶", "🐷", "🐩", "🐮", "🐭", "🐁", "🐰", "🐇", "🦔", "🐻‍❄️", "🐥", "🦢", "🕊️", "🦭", "🦋", "🐚", "🌸", "🐞", "🪷", "🌱", "🌿", "🪴", "🥞","🥐", "🍓","🍒","🍥","🍦","☕","🧋","🧁","🎂","🍰","🍮","🍩","🍨","🌙","⭐","☁️","⛈️","🌬️","⛄","🌧️","🌨️","✨","🎀","🎨","🩰","🕯️","📓","✉️","🖇️","🗒️","🪞","🫧","🧺"];

let showEmoji = document.getElementById("show-emoji");
let getEmoji = document.getElementById("get-emoji");
let getEmojiCombo = document.getElementById("get-combo");

getEmoji.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * emojis.length);

    showEmoji.textContent = emojis[randomIndex];
})

getEmojiCombo.addEventListener("click", function(){
    let randomIndexOne = Math.floor(Math.random() * emojis.length);
    let randomIndexTwo = Math.floor(Math.random() * emojis.length);
    let randomIndexThree = Math.floor(Math.random() * emojis.length);

    showEmoji.textContent = emojis[randomIndexOne] + emojis[randomIndexTwo] + emojis[randomIndexThree];
})