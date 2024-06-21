const firebaseConfig = {
    apiKey: "AIzaSyBNR4zPz6pa0Nfa0-iwSFVzRSDrTsYaFPQ",
    authDomain: "chat-b9e50.firebaseapp.com",
    databaseURL: "https://chat-b9e50-default-rtdb.firebaseio.com",
    projectId: "chat-b9e50",
    storageBucket: "chat-b9e50.appspot.com",
    messagingSenderId: "680988319727",
    appId: "1:680988319727:web:0c3237568c79cbe82aa01a",
    measurementId: "G-5DR0VPJJTR"
  };

  firebase.initializeApp(firebaseConfig);

var chatdb=firebase.database().ref('chat');
document.getElementById('form').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name=getElementval('name');
    var age=getElementval('age');
    var m=getElementval('m');
    var f=getElementval('f');
    saveMessages(name,age,m,f);
    /* console.log(name, age, m, f); */

    document.querySelector('.clickme').style.display="block";

};

const saveMessages = (name, age, m, f) => {
       var newuser= chatdb.push();

       newuser.set({
        name:name,
        age:age,
        m:m,
        f:f,
       });
};

const getElementval = (id) => {
    return document.getElementById(id).value;
};



/* onclcik */
/* window.onload = function() {
    document.getElementById("form").reset();
}; */