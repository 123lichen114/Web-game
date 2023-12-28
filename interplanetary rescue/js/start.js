function nowTime() {//获取当前时间
    let now = new Date();
    let _month = (10 > (now.getMonth() + 1)) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
    let _day = (10 > now.getDate()) ? '0' + now.getDate() : now.getDate();
    let _hour = (10 > now.getHours()) ? '0' + now.getHours() : now.getHours();
    let _minute = (10 > now.getMinutes()) ? '0' + now.getMinutes() : now.getMinutes();
    let _second = (10 > now.getSeconds()) ? '0' + now.getSeconds() : now.getSeconds();
    return now.getFullYear() + '-' + _month + '-' + _day + ' ' + _hour + ':' + _minute + ':' + _second;
}

function sleep(n) {
    var start = new Date().getTime();
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}

function show_video(path) {
    body = document.body;
    body.innerHTML = "";
    var video = document.createElement('video');
    video.src = path;
    video.autoplay = "autoplay";
    video.style = "width:100%; height:100%; object-fit:fill;"

    var banner = document.createElement('div');
    banner.className = "banner";
    banner.style = "width: 100%; height: 100vh;";

    var skip = document.createElement('input');
    skip.type = "button";
    skip.style = "width: 100px; height: 50px; position: absolute; top: 20px; right: 32px; font-size: 20px; z-index: 100;border-radius: 5px;background-color: rgba(255, 255, 255,0.2);"
    skip.value = "跳过动画";

    skip.onclick = function () {
        video.currentTime = 99999;
    }

    banner.appendChild(skip);

    banner.appendChild(video);

    body.appendChild(banner);
}

function start_game(process) {
    switch (process) {
        case "第1幕":
            show_video("./game/picture/背景介绍视频.mp4");
            video = document.getElementsByTagName('video')[0];
            video.addEventListener('ended', function () {location.href = "./game/Site/第一画面/1.mom_lost.html";})
            break;
        case "第2幕":
            location.href = "./game/Site/第二画面/2.news.html";
            break;
        case "第3幕":
            location.href = "./game/Site/第三画面/3.worktogether.html";
            break;
        case "第4幕":
            location.href = "./game/Site/第四画面/4.a_Find_proof.html";
            break;
        case "第5幕":
            location.href = "./game/Site/第五画面/5.Breaking into the base.html";
            break;
        case "第6幕":
            location.href = "./game/Site/第六画面/6.base_explore.html";
            break;
        case "第7幕":
            location.href = "./game/Site/第七画面/7.Find_hostage.html";
            break;
        case "第8幕":
            location.href = "./game/Site/第八画面/8.Gama.html";
            break;
        case "第9幕":
            location.href = "./game/Site/第九画面/9.KOthe_guard.html";
            break;
        case "第10幕":
            location.href = "./game/Site/第十画面/10.bad_volunteer.html";
            break;
        case "第11幕":
            location.href = "./game/Site/第十一画面/11.close_to_turth.html";
            break;
        case "第12幕":
            location.href = "./game/Site/第十二画面/12.escort.html";
            break;
        case "第13幕":
            location.href = "./game/Site/第十三画面/13.Hier_appears.html";
            break;
        case "第14幕":
            location.href = "./game/Site/第十四画面/14.Be_in_danger.html";
            break;
        case "第15幕":
            location.href = "./game/Site/第十五画面/15.Fighting.html";
            break;
        case "第16幕":
            location.href = "./game/Site/第十六画面/16.laboratory1.html";
            break;
        case "第17幕":
            location.href = "./game/Site/第十七画面/17.laboratory2.html";
            break;
        case "第18幕":
            location.href = "./game/Site/第十八画面/18.Crazy_Hier.html";
            break;
        case "第19幕":
            location.href = "./game/Site/第十九画面/19.Commit_yourself.html";
            break;
        case "第20幕":
            location.href = "./game/Site/第二十画面/20.endA.html";
            break;
        case "第B2幕":
            location.href = "./game/Site/B2/b2.html";
            break;
        case "第B2幕":
            location.href = "./game/Site/B2/b2.html";
            break;
        case "第B3幕":
            location.href = "./game/Site/B3/b3.html";
            break;
        case "第B4幕":
            location.href = "./game/Site/B4/b4.html";
            break;
        case "第B5幕":
            location.href = "./game/Site/B5/b5.html";
            break;
        case "第B6幕":
            location.href = "./game/Site/B6/b6.html";
            break;
        case "第B7幕":
            location.href = "./game/Site/B7/b7.html";
            break;
        case "第B8幕":
            location.href = "./game/Site/B8/b8.html";
            break;
        case "第B9幕":
            location.href = "./game/Site/B9/b9.html";
            break;
        case "第B10幕":
            location.href = "./game/Site/BA_10/b10.html";
            break;
        case "第B11幕":
            location.href = "./game/Site/BA_end/ba_end.html";
            break;
        case "第C10幕":
            location.href = "./game/Site/BB_end/bb_end.html";
            break;
    }
}

function con() {
    var player = localStorage.getItem("currentUser");
    if (player == null) {
        alert("玩家尚未登录");
        return;
    }
    var info = JSON.parse(localStorage.getItem(player));
    var num = parseInt(info.num);

    var store_win = document.querySelector(".store");
    var h5s = store_win.getElementsByTagName('h5');
    var spans = store_win.getElementsByClassName("time");
    for (i = 0; i < h5s.length; i++) {
        if (i < num) {
            var process = info["process" + (i + 1)];
            var timestamp = info["timestamp" + (i + 1)];
            if (process == null) {
                process = "无存档记录";
                timestamp = ""
            }
            h5s[i].innerText = process;
            spans[i].innerText = timestamp;
        }
        else {
            process = "无存档记录";
            timestamp = ""
            h5s[i].innerText = process;
            spans[i].innerText = timestamp;
        }
    }
    store_win.style.visibility = "visible";
}

function read_game(choice) {
    localStorage.setItem("currentNum", choice.index);
    var player = localStorage.getItem("currentUser");
    var info = JSON.parse(localStorage.getItem(player));
    var process = info["process" + choice.index];
    start_game(process);
}

var con_btn = document.querySelector('.continue');
con_btn.onclick = con;

function clo() {
    var store_win = document.querySelector(".store");
    store_win.style.visibility = "hidden";
}

var close = document.querySelector(".close");
close.onclick = clo;

var choices = document.getElementsByClassName('choice')
for (i = 0; i < choices.length; i++) {
    choices[i].index = i + 1;
    choices[i].onclick = function () {
        read_game(this);
    }
}

function new_game() {
    var player = localStorage.getItem("currentUser");
    if (player == null) {
        alert("玩家尚未登录!");
    }
    else {

        var Player = JSON.parse(localStorage.getItem(player));
        var cnt = parseInt(Player.num);
        var update = {
            username: Player.username,
            password: Player.password,
            num: parseInt(Player.num)
        }
        for (let i = 1; i <= 8; i++) {
            update["achi" + i] = Player["achi" + i];
        }
        for (let i = 1; i <= cnt; i++) {
            update["process" + i] = Player["process" + i];
            update["timestamp" + i] = Player["timestamp" + i];
        }
        if (cnt <= 5) {
            update.num = parseInt(Player.num) + 1;
            update["process" + (cnt + 1)] = "第1幕";
            update["timestamp" + (cnt + 1)] = nowTime();
            localStorage.removeItem(update.username);
            localStorage.setItem(update.username, JSON.stringify(update));
            localStorage.setItem("currentNum", cnt + 1);
            start_game("第1幕");
        }
        else {
            alert("当前存档已满，请选择要覆盖的存档");
            var store_win = document.querySelector(".store");
            var h5s = store_win.getElementsByTagName('h5');
            var spans = store_win.getElementsByClassName("time");
            for (i = 0; i < h5s.length; i++) {
                if (i < 7) {
                    var process = Player["process" + (i + 1)];
                    var timestamp = Player["timestamp" + (i + 1)];
                    if (process == null) {
                        process = "无存档记录";
                        timestamp = ""
                    }
                    h5s[i].innerText = process;
                    spans[i].innerText = timestamp;
                }
            }
            store_win.style.visibility = "visible";
            var choices = document.getElementsByClassName('choice')
            for (i = 0; i < choices.length; i++) {
                choices[i].index = i + 1;
                choices[i].onclick = function () {
                    update["process" + (i + 1)] = "第1幕";
                    update["timestamp" + (i + 1)] = nowTime();
                    localStorage.setItem(update.username, JSON.stringify(update));
                    localStorage.setItem("currentNum", this.index);
                    start_game("第1幕");
                }
            }
        }
    }
}

var create = document.querySelector('.new');
create.onclick = new_game;

function check_log() {
    var player = localStorage.getItem("currentUser");
    if (player == null) {
        alert("玩家尚未登录!");
    }
    else {
        window.location.href = "./achivment/成就.html"
    }
}

var cj = document.querySelector('.achieve');
cj.onclick = check_log;
