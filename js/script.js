let emojis = ["๐ธ", "๐บ", "๐ผ","๐ฝ","๐ฟ","๐พ","๐ค","๐ญ","๐","๐","๐ซถ๐ป", "๐ซฐ๐ป", "๐ง๐ปโโ๏ธ", "๐ถ", "๐ท", "๐ฉ", "๐ฎ", "๐ญ", "๐", "๐ฐ", "๐", "๐ฆ", "๐ปโโ๏ธ", "๐ฅ", "๐ฆข", "๐๏ธ", "๐ฆญ", "๐ฆ", "๐", "๐ธ", "๐", "๐ชท", "๐ฑ", "๐ฟ", "๐ชด", "๐ฅ","๐ฅ", "๐","๐","๐ฅ","๐ฆ","โ","๐ง","๐ง","๐","๐ฐ","๐ฎ","๐ฉ","๐จ","๐","โญ","โ๏ธ","โ๏ธ","๐ฌ๏ธ","โ","๐ง๏ธ","๐จ๏ธ","โจ","๐","๐จ","๐ฉฐ","๐ฏ๏ธ","๐","โ๏ธ","๐๏ธ","๐๏ธ","๐ช","๐ซง","๐งบ"];

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