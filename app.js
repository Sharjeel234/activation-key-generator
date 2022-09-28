var keyText = document.querySelector(".key");
var btn = document.querySelector('.btnGen')
var btn2 = document.querySelector('.btnCopy')
var theme = document.querySelector('.theme-toggler')

function genKey() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var keyLength = 4;
    var key = "";
    for (var i = 0; i <= keyLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        key += chars.substring(randomNumber, randomNumber + 1);
    }
    return key;
}

btn.addEventListener('click', () => {
    keyText.innerHTML = `${genKey()} - ${genKey()} - ${genKey()} - ${genKey()} - ${genKey()}`
})

function copy(){
    var cb = navigator.clipboard;
    let text = keyText;
    cb.writeText(text.innerText).then(()=> alert('Key Copied'))
}

btn2.addEventListener('click', ()=>{
    copy()
})

theme.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme')

    theme.querySelector('i:nth-child(1)').classList.toggle('active')
    theme.querySelector('i:nth-child(2)').classList.toggle('active')
})
