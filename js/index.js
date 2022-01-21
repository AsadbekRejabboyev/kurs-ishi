import { qitalar } from "./qitalar.js";


var count = 0;
var sana = 1;
var s = 0;
var data = [];
var states = [];
var xato = 0;
var son = 0;
var array2 = [];
var minibus = document.getElementById("minibus");
var mini = -100;


// Jon uchun

const jonlar = [
    'fas fa-heart',
    'fas fa-heart',
    'fas fa-heart',
]

let div = document.getElementById("heir");
function Boss(nums) {
    div.innerHTML = "";
    for (let v of nums) {
        let i = document.createElement("i");
        div.append(i)
        i.setAttribute("class", v);
    }
    return nums;
}

function edit(nums) {
    nums.push('far fa-heart');
    nums.shift();
    return nums;
}

function home() {
    document.getElementById("modal").style.display = "none"
    document.getElementById("home").style.display = "block"

}
window.home = home;

// Jon uchun oxiri

function Next() {
    sana++;
    document.getElementById("sana").innerHTML = (sana) + "/" + data.length;
    document.querySelector('#choicesList').innerHTML = ''
    choices1(s++, data);
    son++;

}


// Flag function

function flag() {
    Boss(jonlar)
    console.log("flag funksiya ishladi");
    document.getElementById("home").style.display = "none";
    let sectionMenu = document.createElement("section");
    sectionMenu.setAttribute("id", "menu");
    let container = document.createElement("div");
    let box = document.createElement("div");
    let top = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList = "container";
    box.classList = "box";
    top.classList = "top";
    box.append(top);
    top.append(h1);
    h1.classList = "mt-3"
    h1.innerHTML = " viktorinasi";
    document.body.append(sectionMenu);
    sectionMenu.append(container);
    container.append(box);

    for (let v of qitalar) {
        let button = document.createElement("button");

        box.append(button);
        button.classList = "pb-5"
        button.innerHTML = v.title + '<h1> <i class="fas fa-lock"></i></h1>'
        button.onclick = (n) => {
            data = v.data;
            states = v.states;
            choices1(s++, data);
            let d = n.target.innerHTML.replace('<h1> <i class="fas fa-lock"></i></h1>', "");
            document.getElementById("menu").style.display = "none";
            document.getElementById("flag").style.display = "block";
        }
    }
}
window.flag = flag;

function copital() {
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
    boxC.append(topC);
    topC.append(h1C);
    h1C.classList = "mt-3"
    h1C.innerHTML = "Poytaxt viktorinasi";
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
            choices2(s++, data);
            let k = n.target.innerHTML.replace('<h1> <i class="fas fa-lock"></i></h1>', "");
            document.getElementById("menu").style.display = "none";
            document.getElementById("flag").style.display = "block";
        }
    }
}
window.copital = copital;

function createElement(name = 'div', innerHTML = '', className = '', parent) {
    let element = document.createElement(name);
    element.innerHTML = innerHTML;
    element.className = className;
    parent && parent.append(element);
    return element;
}


function RenDer() {

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(states);
    array2 = states.slice(0, 4);

    function Qoshish(kerak) {
        if (!array2.includes(kerak)) {
            array2.pop();
            array2.push(kerak)
        }
    }

    Qoshish(data[s].answer);
    shuffleArray(array2);

    for (let i = 0; i < 4; i++) {
        let btn = createElement('button', `${array2[i]}`, 'button', choicesList);

        btn.onclick = (e) => {
            if (e.target.innerHTML === savol.answer) {
                count++;
                console.log("count = " + count);

                document.getElementById("count").innerHTML = count;
                mini = mini + 3.3;
                minibus.style.left = `${mini}` + "%";
            } else {
                xato++;
                edit(jonlar);
                Boss(jonlar);
                if (xato == 3) {
                    document.getElementById("modal").style.display = "block";
                    document.getElementById("h5").innerHTML = count;
                }
                console.log(xato);
            }

            if (sana < data.length) {
                Next();
            }
            else {
                document.getElementById("over").innerHTML = "O'yin tugadi sizning balingiz";
                document.getElementById("modal").style.display = "block";
                document.getElementById("h5").innerHTML = count;
            }
        }
    }
}
window.RenDer = RenDer;



function forFlag(s, asadbek) {
    document.querySelector("#sana").innerHTML = (sana) + "/" + data.length;
    console.log("choices funksiya ishladi");
    let rasmTeg = document.getElementById("FlagTag");
    rasmTeg.innerHTML = "";
    let savol = asadbek[s];
    let choicesList = document.querySelector('#choicesList');
    let rasm = createElement("img");
    let h1 = createElement("h1");
    rasmTeg.append(rasm)
    rasmTeg.append(h1)
    rasm.setAttribute("src", savol.img)
    h1.innerHTML = savol.copital
    RenDer();
}

window.forFlag = forFlag;


function forCopital(s, asadbek) {
    document.querySelector("#sana").innerHTML = (sana) + "/" + data.length;
    console.log("choices funksiya ishladi");
    let rasmTeg = document.getElementById("FlagTag");
    rasmTeg.innerHTML = "";
    let savol = asadbek[s];
    let choicesList = document.querySelector('#choicesList');
    let rasm = createElement("h1");
    rasmTeg.append(rasm)
    // rasm.setAttribute("src", savol.img)
    rasm.innerHTML = savol.copital
    RenDer();
}

window.forCopital = forCopital;


forFlag(s, asadbek)


forCopital(s, asadbek)


window.flag = flag;
