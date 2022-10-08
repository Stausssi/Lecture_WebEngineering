function createGrid() {
    var spielfeld = document.getElementById("ziel");
    if (spielfeld.firstChild) {
        alert("Spielfeld bereits erstellt!");
    } else {
        var table = document.createElement("table");

        for (var i = 0; i < 6; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
                var item = document.createElement("td");
                var content = String.fromCharCode(97 + j) + (6 - i);
                item.append(document.createTextNode(content));
                item.setAttribute("class", "game");
                item.setAttribute("onclick", "fieldClicked('" + content + "')");
                row.appendChild(item);
            }
            table.appendChild(row);
        }

        spielfeld.appendChild(table);
    }
}

function fieldClicked(param) {
    window.alert(param);
}
