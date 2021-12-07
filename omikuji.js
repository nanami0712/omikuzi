let username;   //名前を入れる箱の作成
let userresult; //おみくじの結果を入れる箱の作成

username = prompt("お名前を教えて下さい。");    //名前の入力を要求 → username に代入
if (username == "") {
    username = "名無し";    //未入力の場合、"名無し"を代入
}
document.getElementById("name").innerHTML = username;   //id"name"(テスト) に username の代入

let rand = Math.floor( Math.random() * 5) ;       //0~4の数をランダムに rand に代入
if (rand == 0) {
    userresult = "大吉";    
}
if (rand == 1) {
    userresult = "中吉";    
}
if (rand == 2) {
    userresult = "小吉";    
}
if (rand == 3) {
    userresult = "吉";    
}
if (rand == 4) {
    userresult = "凶";    
}

document.getElementById("result").innerHTML = userresult;   //id"result"(テスト) に userresult の代入