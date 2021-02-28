var n = "abcdefgh";
var table = document.createElement("table");
var tr, td, i;
for (i = 0; i < 10; i++) {
    tr = document.createElement("tr");
    table.append(tr);
    for (var j = 0; j < 10; j++) {
        td = document.createElement("td");
        if (j > 0 && j < 9 && i > 0 && i < 9) {
            td.classList.add("board");
            switch (i) {
                case 1:
                    td.innerHTML = figur[0][j - 1];
                    break;
                case 2:
                    td.innerHTML = figur[1];
                    break;
                case 7:
                    td.innerHTML = figur[3];
                    break;
                case 8:
                    td.innerHTML = figur[2][j - 1];
                    break
            }
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    td.classList.add("black");
                } else {
                    td.classList.add("white");
                }
            } else {
                if (j % 2 == 0) {
                    td.classList.add("white");
                } else {
                    td.classList.add("black");
                }
            }
        }
        if (i > 0 && i < 9) {
            if (j == 0) {
                td.innerText = 9 - i
            }
            if (j == 9) {
                td.innerText = 9 - i;
                td.classList.add("right")
            }
        }
        if (j > 0 && j < 9) {
            if (i == 0) {
                td.innerText = n[j - 1]
                td.classList.add("up")
            }
            if (i == 9) {
                td.innerText = n[j - 1]
            }
        }

        tr.append(td);
    }
}
// headers[i].classList.add("myClass");
console.log(table);
document.getElementsByTagName("div")[0].append(table);

document.querySelector("h1").innerHTML = "&#9816;";
//    var item = document.createTextNode("Обычный текст");
//    document.getElementsByTagName("div")[0].append(item);
