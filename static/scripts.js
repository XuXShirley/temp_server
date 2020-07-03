var timer = null;
var circles = ["crust", "mantle", "core"];
var lowBndTime = 50;
var upBndTime = 800;
function displayClock(num) {//num是传入的startClock中的动态值
    if (num < 10) {
        return "0" + num;
    }
    else {
        return num;
    }
}
//停止计时
function stopClock() {
    clearTimeout(timer);
}
//开始计时
function startClock() {
    var time = new Date();
    var hours = displayClock(time.getHours()) + ":";
    var minutes = displayClock(time.getMinutes()) + ":";
    var seconds = displayClock(time.getSeconds());
    //显示时间
    show.innerHTML = hours + minutes + seconds;//在id为show的块区域显示
    timer = setTimeout("startClock()", 1000);//延时器
}
function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function outSchool(s, s_en, b, d, dt, n) {
    wait(random(lowBndTime, upBndTime));
    s.innerHTML = "出校";
    s_en.innerHTML = "PASSED";
    for (var i = 0; i < circles.length; i++) {
        let c = document.getElementById(circles[i]);
        c.className = c.className.replace("default", "success");
    }
    b.style.display = ""
    n.innerHTML = "此状态保持10分钟，请尽快出校"
    b.className = b.className.replace("default", "success");
}
function getInSchool(s, s_en, b, d, dt, n) {
    wait(random(lowBndTime, upBndTime));
    s.innerHTML = "点击进校";
    s_en.innerHTML = "";
    for (var i = 0; i < circles.length; i++) {
        let c = document.getElementById(circles[i]);
        c.className = c.className.replace("success", "default");
    }
    n.innerHTML = "仅在进校门时点击出示，提前点击无效"
    b.className = b.className.replace("success", "default");
}
function inSchool(s, s_en, b, d, dt, n) {
    wait(random(lowBndTime, upBndTime));
    s.innerHTML = "进校";
    s_en.innerHTML = "PASSED";
    for (var i = 0; i < circles.length; i++) {
        let c = document.getElementById(circles[i]);
        c.className = c.className.replace("default", "success");
    }
    n.innerHTML = "此状态保持30分钟，请尽快进校"
    b.className = b.className.replace("default", "success");
}
function getOutSchool(s, s_en, b, d, dt, n) {
    wait(random(lowBndTime, upBndTime));
    s.innerHTML = "点击出校";
    s_en.innerHTML = "";
    for (var i = 0; i < circles.length; i++) {
        let c = document.getElementById(circles[i]);
        c.className = c.className.replace("success", "default");
    }
    b.style.display = "none"
}
function stateTrans() {
    var s = document.getElementById("state");
    var s_en = document.getElementById("state_en");
    var n = document.getElementById("state_note");
    var b = document.getElementById("bubble");
    var d = document.getElementById("dialog");
    var dt = document.getElementById("dialog_txt");
    if (s.innerHTML == "点击出校") {
        d.style.display = ""
        dt.innerHTML = "需在10分钟内出校，确定出校吗？"
    }
    else if (s.innerHTML == "出校") {
        getInSchool(s, s_en, b, d, dt, n);
    }
    else if (s.innerHTML == "点击进校") {
        d.style.display = ""
        dt.innerHTML = "需在30分钟内进校，确定进校吗？"
    }
    else if (s.innerHTML == "进校") {
        getOutSchool(s, s_en, b, d, dt, n);
    }
}
function confirm() {
    document.getElementById("dialog").style.display = 'none';
    var s = document.getElementById("state");
    var s_en = document.getElementById("state_en");
    var n = document.getElementById("state_note");
    var b = document.getElementById("bubble");
    var d = document.getElementById("dialog");
    var dt = document.getElementById("dialog_txt");
    if (s.innerHTML == "点击出校")
        outSchool(s, s_en, b, d, dt, n);
    else if (s.innerHTML == "点击进校")
        inSchool(s, s_en, b, d, dt, n);
}
function decline() {
    document.getElementById("dialog").style.display = 'none';
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#avatar')
                .attr('src', e.target.result);
                // .width(150)
                // .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function setProfile() {
    document.getElementById("profile").style.display = "";
}
function submitProfile() {
    var name = document.getElementById("name_input").value;
    var id = document.getElementById("id_input").value;
    document.getElementById("name").innerHTML = name;
    document.getElementById("id").innerHTML = id;
    document.getElementById("profile").style.display = 'none';
}
function declineProfile() {
    document.getElementById("profile").style.display = 'none';
}