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

    var player = localStorage.getItem("currentUser");
    var info = JSON.parse(localStorage.getItem(player));
    for(let i=1;i<=12;i++){
        var che=info["achi"+i];
        if(che==1){
            var lockid=document.getElementById("lock"+i);
            lockid.style.display="none";
            var unlockid=document.getElementById("unlock"+i);
            unlockid.style.display="block";
        }
    }
	function backtoindex(){
	    location.href="../start.html";
	}