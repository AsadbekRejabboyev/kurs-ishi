
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

var flagData, capitalData;

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


let body = document.querySelector("body");
let home = document.createElement("section");
let container = document.createElement("div");
let box = document.createElement("div");
let h1 = document.createElement("h1");
let buttonlar = document.createElement("div")

body.append(home);
home.append(container);
container.append(box);
box.append(h1)
box.append(buttonlar)
h1.innerHTML = "O'yinimizga hush kelibsiz";

home.id = "home";
container.className = "container - fluid";
box.className = "box";
buttonlar.className = "buttonlar";


// forFuncrtion

function forFlag(s, asadbek = "", asadbek2 = "") {
    document.querySelector("#sana").innerHTML = (sana) + "/" + data.length;

    let rasmTeg = document.getElementById("FlagTag");
    rasmTeg.innerHTML = "";
    if (asadbek != "") {
        let rasm = createElement("img");
        rasmTeg.append(rasm)
        rasm.src = asadbek[s++].img;
    }

    let choicesList = document.querySelector('#choicesList');

    if (asadbek2 != "") {
        let h1 = createElement("h1");
        rasmTeg.append(h1)
        h1.innerHTML = asadbek2[s].copital
    }
    RenDer(asadbek[s]);
}

// function home




// function next


function Next() {
    sana++;
    document.getElementById("sana").innerHTML = (sana) + "/" + data.length;
    document.querySelector('#choicesList').innerHTML = ''
    forFlag(s++, data, "");
    son++;

}

// flag and capital



function FunctionMenu(BayroqOurPoytaxt) {
    Boss(jonlar)

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
    h1.innerHTML = BayroqOurPoytaxt + " viktorinasi";
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
            forFlag(s++, data, "");
            let d = n.target.innerHTML.replace('<h1> <i class="fas fa-lock"></i></h1>', "");
            document.getElementById("menu").style.display = "none";
            document.getElementById("flag").style.display = "block";
        }
    }

}
window.flag = flag;

const array = ["Bayroqlar", "Poytaxtlar"]

function renDerButton(innerHTML) {
    let button = document.createElement("button")
    buttonlar.append(button)
    button.innerHTML = innerHTML;
    button.onclick = (e) => {
        let d = e.target.innerHTML
        if (d == array[0]) {
            d = d.replace("lar", "")

            FunctionMenu(d)
        } else {
            d = d.replace("lar", "")
            FunctionMenu(d)
        }
    }
}
array.map(n => {
    renDerButton(n);
})

function RenDer(savol) {

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(states);
    console.log("states = " + states);
    array2 = states.slice(0, 4);

    console.log("array2 = " + array2);

    function Qoshish(kerak) {
        if (!array2.includes(kerak)) {
            array2.pop();
            array2.push(kerak)
        }
    }
    console.log("data.answer =" + data[s].answer);
    Qoshish(data[s].answer);
    shuffleArray(array2);

    for (let i = 0; i < 4; i++) {
        let btn = createElement('button', `${array2[i]}`, 'button', choicesList);

        btn.onclick = (e) => {
            if (e.target.innerHTML === savol.answer) {
                count++;


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

function createElement(name = 'div', innerHTML = '', className = '', parent) {
    let element = document.createElement(name);
    element.innerHTML = innerHTML;
    element.className = className;
    parent && parent.append(element);
    return element;
}