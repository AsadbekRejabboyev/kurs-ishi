Boss(jonlar)
console.log("flag funksiya ishladi");
document.getElementById("home").style.display = "none";
let sectionMenuC = document.createElement("section");
sectionMenuC.setAttribute("id", "menu");
let containerC = document.createElement("div");
let boxC = document.createElement("div");
let topC = document.createElement("div");
let h1C = document.createElement("h1");

containerC.classList = "container";
boxC.classList = "box";
topC.classList = "top";
boxC.append(top);
topC.append(h1);
h1C.classList = "mt-3"
h1C.innerHTML = "Bayroq viktorinasi";
document.body.append(sectionMenuC);
sectionMenuC.append(containerC);
containerC.append(boxC);

for (let d of qitalar) {
    let buttonC = document.createElement("button");

    boxC.append(buttonC);
    buttonC.classList = "pb-5"
    buttonC.innerHTML = d.title + '<h1> <i class="fas fa-lock"></i></h1>'
    buttonC.onclick = (n) => {
        data = d.data;
        states = d.states;
        choices(s++);
        let k = n.target.innerHTML.replace('<h1> <i class="fas fa-lock"></i></h1>', "");
        document.getElementById("menu").style.display = "none";
        document.getElementById("flag").style.display = "block";
    }
}
















document.querySelector("#sana").innerHTML = (sana) + "/" + data.length;
console.log("choices funksiya ishladi");
let rasmTeg = document.getElementById("FlagTag");
rasmTeg.innerHTML = "";
// console.log(data[s].title);
let savol = asadbek[s];
let choicesList = document.querySelector('#choicesList');
let rasm = createElement("h1");
rasmTeg.append(rasm)
// rasm.setAttribute("src", savol.copital)
rasm.innerHTML = savol.copital
