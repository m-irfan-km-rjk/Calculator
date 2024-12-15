var txt = document.querySelector("#input-text");
var ans = false;

document.addEventListener('keydown',(e) => {
    var key = e.key;
    console.log(key);
    if(key == '/') {
        addToCalc('÷');
    } else if(key == '*') {
        addToCalc('x');
    } else if(key == 'Backspace') {
        addToCalc('ce');
    } else if(key == '=' || key == 'Enter') {
        addToCalc('eq');
    } else if(key == '+') {
        addToCalc('+');
    } else if(key == '-') {
        addToCalc('-');
    } else if(!isNaN(parseInt(key))) {
        addToCalc(key);
    }
});

function addToCalc(item) {
    if(item === "ac") {
        txt.value = "0";
    } else if(item === "ce") {
        if(txt.value.length == 1) {
            txt.value = "0";
        } else {
            txt.value = txt.value.slice(0,-1);
        }
    }else if(item === "eq") {
        txt.value = eval(txt.value.replace("÷","/").replace("x","*"));
        ans = true;
    } else {
        if(ans == true) {
            if(isNaN(parseInt(item))) {
                txt.value += item;
            } else {
                txt.value = item;
            }
            ans = false;
        } else {
            if(txt.value != "0") {
                txt.value += item;
            } else {
                txt.value = item;
            }
        }
    }
}