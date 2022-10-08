var replace;

function init() {
    replace = document.getElementById("replace");
    updateTime()
}

function updateTime() {
    window.setTimeout("updateTime()", 500);

    let time = new Date();

    let clock = document.createElement("h1");
    clock.setAttribute("class", "clock");
    clock.append(document.createTextNode(addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds())));

    replace.replaceChild(clock, replace.firstChild);
}

function addZero(i) {
    return i < 10 ? "0" + i : i;
}
