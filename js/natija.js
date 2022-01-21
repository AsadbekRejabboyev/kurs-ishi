// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getDatabase, ref, set, get, onValue, push,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAa6dr8R4gIbxAr4cL-46yqElPdm_kJCr4",
    authDomain: "logininandloginand.firebaseapp.com",
    databaseURL: "https://logininandloginand-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "logininandloginand",
    storageBucket: "logininandloginand.appspot.com",
    messagingSenderId: "137557689586",
    appId: "1:137557689586:web:6434968b8b706feb2afc6b",
    measurementId: "G-BSTDFHFWH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

var obj;

// malumot yozish

let body = document.querySelector("body");
let section = document.createElement("section");
let input = document.createElement("input");
let button = document.createElement("button");
let h1 = document.createElement("h1")


body.append(section);
section.append(input);
section.append(button)
section.append(h1)
input.type = "text";
button.innerHTML = "Chiqarish"
button.onclick = () => {
    set(
        ref(db, 'Natija/' + "Asadbek"),
        {
            davlat: input.value,
            asadbek: input.value,

        },

    )

    get(ref(db, 'Natija/'))
        .then((item) => {
            console.log(item.val().Asadbek.davlat);
        })

}













