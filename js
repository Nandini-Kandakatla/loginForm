
const firebaseConfig = {
    apiKey: "AIzaSyCpn_rSCih2uV5LhLkZReJOZseDlKccZM4",
    authDomain: "loginform-3f924.firebaseapp.com",
    databaseURL: "https://loginform-3f924-default-rtdb.firebaseio.com",
    projectId: "loginform-3f924",
    storageBucket: "loginform-3f924.appspot.com",
    messagingSenderId: "718948314704",
    appId: "1:718948314704:web:56da32e9e6a6044d63eb55"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var LoginFormDB = firebase.database().ref("LoginForm");

document.getElementById("LoginForm").addEventListener("submit", LoginForm);

function LoginForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var password = getElementVal("password");

    saveMessages(name, emailid, password);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("LoginForm").reset();
}

const saveMessages = (name, emailid, password) => {
    var newLoginForm = LoginFormDB.push();

    newLoginForm.set({
        name: name,
        emailid: emailid,
        password: password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};