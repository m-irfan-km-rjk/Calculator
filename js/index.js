var txt = document.querySelector("#input-text");
var ans = false;

function addToCalc(item) {
    if(item === "ac") {
        txt.value = "0";
    } else if(item === "ce") {
        if(item.value.length == 1) {
            txt.value = "0";
        } else {
            txt.value = txt.value.slice(0,-1);
        }
    }else if(item === "eq") {
        txt.value = eval(txt.value.replace("÷","/").replace("x","*"));
        ans = true;
    } else {
        if(ans == true) {
            ans = false;
            txt.value = item;
        } else {
            if(txt.value != "0") {
                txt.value += item;
            } else {
                txt.value = item;
            }
        }
    }
}