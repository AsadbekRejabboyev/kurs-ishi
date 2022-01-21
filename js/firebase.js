import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
import { getDatabase, ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa6dr8R4gIbxAr4cL-46yqElPdm_kJCr4",
    authDomain: "logininandloginand.firebaseapp.com",
    databaseURL: "https://logininandloginand-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "logininandloginand",
    storageBucket: "logininandloginand.appspot.com",
    messagingSenderId: "137557689586",
    appId: "1:137557689586:web:2241d50566dcedab2afc6b",
    measurementId: "G-XRS2B1HCYH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase()

const form = document.querySelector("form")
const signUpBtn = document.querySelector("#signup");
const signInBtn = document.querySelector("#signIn");

const kirish = document.getElementById("kirish");
form.style.display = "none"

function renDerPage() {

    kirish.innerHTML = "";
    let signUp = document.createElement("div");
    kirish.append(signUp);
    signUp.classList = "container p-4 shadow rounded";
    let form = document.createElement("form");
    signUp.append(form);
    let h1 = document.createElement("h1");
    h1.classList = "text-center";
    h1.innerHTML = "Ro'yxatdan o'tish";
    form.append(h1)

    let emailinput = document.createElement("input")
    emailinput.type = "email";
    emailinput.name = "email";
    emailinput.classList = "form-control"
    form.append(emailinput)

    let passwordinput = document.createElement("input")
    passwordinput.type = "password";
    passwordinput.name = "password";
    passwordinput.classList = "form-control"
    form.append(passwordinput)

    let usernameinput = document.createElement("input")
    usernameinput.type = "text";
    usernameinput.name = "username";
    usernameinput.classList = "form-control"
    form.append(usernameinput)

    let button = document.createElement("button");
    button.id = "signUp"
    button.classList = "btn btn-primary"
    button.innerHTML = "SignUp";
    form.append(button)
    button.addEventListener("click", (e) => {

        e.preventDefault()
        let email = form.email.value;
        let password = form.password.value;
        let username = form.username.value;
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {

                console.log(res.user.uid);
                console.log("sign up boldi");
                const uid = res.user.uid;
                set(ref(db, 'users/' + uid), {
                    username: username,
                    email: email,
                    natija: 0,
                    // profile_picture: "my picture"
                })
                    .then(() => {
                        // o'yin pagega o'tish

                        document.getElementById("home").style.display = "block"
                        document.getElementById("kirish").style.display = "none"
                        // Data saved successfully!
                        console.log("malumot saqlandi");
                    })
                    .catch((error) => {
                        // The write failed...
                        console.log("malumot sqlanmadi");

                    });

            })
            .catch((error) => {
                // alert("Ro'yxatdan o'tmadingiz")

                console.log(error);
                console.log(" signup bolmadi yoki bolgan");
            });
    })
}
signUpBtn.addEventListener("click", (e) => {
    renDerPage();
})

// window.addEventListener = addEventListener;
signInBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let email = form.email.value;
    let password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // o'yin pagega o'tish
            document.getElementById("home").style.display = "block"
            document.getElementById("kirish").style.display = "none"
            console.log(res);
            console.log("sign in boldi");
        })
        .catch((error) => {
            alert("Parol yoki email xato")
            console.log(error);
            console.log(" signup bolmadi yoki bolgan");
        });
})
function getUsers(callback) {
    onValue(ref(db, 'users/'), (data) => {
        callback(data.val() || {});
    })
}


const getuserss = (data) => {
    const dataUsers = Object.entries(data);
    dataUsers.map((item) => {
    })
}

getUsers(getuserss)

