document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var credentials = [
        {username: 'nandinidevi', password: 'canteen'},
        {username: '', password: 'password2'},
        {username: 'user3', password: 'password3'},
        {username: 'user4', password: 'password4'},
        {username: 'user5', password: 'password5'},
        {username: 'user6', password: 'password6'},
        {username: 'user7', password: 'password7'},
        {username: 'user8', password: 'password8'},
        {username: 'user9', password: 'password9'},
        {username: 'user10', password: 'password10'}
    ];

    var isValid = false;

    for (var i = 0; i < credentials.length; i++) {
        if (username === credentials[i].username && password === credentials[i].password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        window.location.href = 'staffs-details.html';
    } else {
        alert('Invalid username or password');
    }

var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
});