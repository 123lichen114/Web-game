function trip(obj, trip) {
    document.getElementById(obj).innerHTML = "<b>" + trip + "</b>";
}
function login() {
    var userName = document.getElementById("userName2");
    var uName = userName.value;
    var password = document.getElementById("password2");
    var userPass = password.value;
    var player = JSON.parse(localStorage.getItem(uName));
    if (player != null) {
        if (userPass == player.password) {
            localStorage.removeItem("currentUser");
            localStorage.setItem("currentUser", uName);
            alert("登录成功");
            window.location.href = "start.html";
        }
        else {
            trip("password_trip2", "密码错误, 请重新输入!");
        }
    }
    else {
        trip("name_trip2", "用户名不存在!");
    }
    return false;
}

var form = document.getElementById("form2");
form.onsubmit = login