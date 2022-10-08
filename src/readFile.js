var request;

function getData() {
    if (window.XMLHttpRequest)
        request = new XMLHttpRequest();
    else {
        alert("Schaemen sie sich!");
        return;
    }

    request.open("GET", "content/data.txt", false);
    request.send();

    document.getElementById("content").innerHTML = "<pre>" + request.responseText + "</pre>";
}

function getDataAsync() {
    request.onreadystatechange = stateChange;

    if (window.XMLHttpRequest)
        request = new XMLHttpRequest();
    else {
        alert("Schaemen sie sich!");
        return;
    }

    request.open("GET", "content/data.txt", true);
    request.send();
}

function stateChange() {
    if (request.readyState == 4)
        document.getElementById("content").innerHTML = "<pre>" + request.responseText + "</pre>";
}
