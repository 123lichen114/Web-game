function clear(){
    alert("已重置本地账号及游戏数据");
    localStorage.clear();
}

var cle=document.getElementById("clear1");
cle.addEventListener("click",clear);