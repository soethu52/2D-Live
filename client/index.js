const liveVal = document.getElementById("live");
const updated = document.getElementById("updated");
const set = document.getElementById("set");
const value = document.getElementById("value");
const bottom = document.getElementById("bottom");
const session = document.getElementById("session");
const remainTime = document.getElementById("remainTime");
let signal = document.getElementById("signal");
let AM ="10:00", PM = "02:00";
let result = [
    {open_time:"Time",twod:"2D",set: "Set",value: "Value"},
    {open_time:"12:01:00",twod:"-,-",set: "-",value: "-"},
    {open_time:"16:30:00",twod:"-,-",set: "-",value: "-"}
];
let signalBollen = false;
const getData = async () => {
    const fact = await fetch("https://api.thaistock2d.com/live").then((res) => res.json()).then((data)=> {
        return data;
    });
    const { live, holiday, server_time } = fact;
    let DATE = new Date();
    let splitDate = String(DATE).split(" ")[4];
    if(splitDate === "19:39:00"){
        let data = {
            open_time:"19:39:00",
            twod:live.twod,
            set: live.set,
            value: live.value
        }
        result[1] = data;
        signalBollen = true;
    }else if(splitDate === "19:41:00"){
        let data = {
            open_time:"19:41:00",
            twod:live.twod,
            set: live.set,
            value: live.value
        }
        result[2] = data;
        signalBollen = true;
    }else if(splitDate === "19:40:00"){
        signalBollen = false;
    }
    signalBollen ? signal.style.display= "block" : signal.style.display= "none";
    liveVal.innerHTML = live.twod;
    set.innerHTML = `Set-${live.set}`;
    value.innerHTML = `Value-${live.value}`;
    // console.log(live, result, holiday, server_time);
    updated.innerHTML = `Updated:${server_time}`;
    bottom.innerHTML = "";
    let ul = document.createElement("ul");
    result.map((val=> {
        // console.log(val);
        let li = document.createElement("li");
        let open_time = document.createElement("div");
        open_time.innerHTML = val.open_time;
        li.append(open_time);
        let twod = document.createElement("div");
        twod.innerHTML = val.twod;
        li.append(twod);
        let set = document.createElement("div");
        set.innerHTML = val.set;
        li.append(set);
        let value = document.createElement("div");
        value.innerHTML = val.value;
        li.append(value);
        ul.appendChild(li);
    }))
    bottom.appendChild(ul);
    setTimeout(getData, 1000);
}
getData();

// morning();
let DATE = new Date();
let YEAR = DATE.getFullYear();
let MONTH = DATE.getMonth();
let DAY = DATE.getDate();
let HOUR = DATE.getHours();
let MINUTE = DATE.getMinutes();
let TIME;
let sessionVale = "မနက်ပိုင်း";
let showText;
console.log(HOUR,MINUTE);
if(HOUR < 12 && HOUR <= 12) {
    TIME = "12:01:00"
}else if(HOUR >= 12 && HOUR <= 16 ){
    TIME = "16:30:00";
}else{
    TIME = "0:00:00";
}
// console.log(TIME);
let countDownDate = new Date(`${MONTH+1} ${DAY}, ${YEAR} ${TIME}`).getTime();

let lastTime = setInterval(() =>  {
    // code goes here
    if(HOUR > 12){
        sessionVale = "ညနေပိုင်း"
    }
    session.innerHTML = `${sessionVale}အတွက်`;
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    // var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    console.log(hours);
    if(hours == 0){
        showText = `${minutes} မိနစ် ${seconds} စက္ကန့် <br/> သာလိုပါတော့သည်။`;
    }else if(minutes == 0 ){
        showText = `${seconds}စက္ကန့် <br/> သာလိုပါတော့သည်။`;
    }else if(seconds == 0){
        showText = `ပေါက်ဂဏန်းထွက်ပါပြီ`;
    }else if(hours < 0){
        showText = `ပေါက်ဂဏန်းများထွက်ပြီးပါပြီး`;
    }else{
        showText = `${hours} နာရီ ${minutes} မိနစ် ${seconds} စက္ကန့် <br/> သာလိုပါတော့သည်။`;
    }
    remainTime.innerHTML = showText
}, 1000);

// New js
const today = new Date()
let yyyy = today.getFullYear()
let mm = today.getMonth()
let dd = today.getDate()
let day = today.getDay()
let plan, conH = AM

// console.log(today)
let sessionMyn = "မနက်ပိုင်း"
let sess = "AM"
let h = 0,m = 0, s = 0
function showTime(){
    let today = new Date()
    h = today.getHours() // 0 - 23
    m = today.getMinutes() // 0 - 59
    s = today.getSeconds() // 0 - 59
    if(h == 0){
        h = 12
    }
    if(h > 12){
        h = h - 12
        sess = "PM"
        sessionMyn = "ညနေပိုင်း"
        conH = PM
    }
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    var time =`Time - ${h}:${m}:${s} ${sess}`
    document.getElementById('time').innerHTML = time
    setTimeout(showTime, 1000)
}
showTime()

if(day == 1){
    day = "တနင်္လာ"
    plan = "မင်္ဂလာလုံးပိုင်"
}else if(day == 2){
    day = "အင်္ဂါ"
    plan = "အထူးလုံးပိုင်"
}else if(day == 3){
    day = "ဗုဒ္ဓဟူး"
    plan = "ရှယ်လုံးပိုင်"
}else if(day == 4){
    day = "ကြာသပတေး"
    plan = "အပိုင်လုံးပိုင်"
}else if(day == 5){
    day = "သောကြာ"
    plan = "ပွဲသိမ်းလုံးပိုင်"
}else if(day == 6){
    day = "စနေ"
    plan = "No Plan"
}else if(day==7){
    day = "တနင်္ဂနွေ"
    plan = "No Plan"
}else{
    day = "No Found"
    plan = "No Plan"
}

if (dd < 10) dd = '0' + dd
if (mm < 10) mm = '0' + (mm + 1)

const Today = `${dd}-${mm}-${yyyy}(${sessionMyn}) - ${day}နေ့`
// console.log(Today)
document.getElementById('today').innerHTML = Today

// making one key
let oneKey = 0,oneChange = 0
function makingOneKey(){
    let oneKeyShow = document.getElementById("oneKey")
    oneKey = Math.floor(Math.random() * 10)
    oneKeyShow.innerHTML = oneKey
    // let conH = "03:10"
    let currenH = `${h}:${m}`
    if(currenH < conH){
        setTimeout(makingOneKey, 1000)
    }else{
        clearTimeout(makingOneKey)
    }
}
makingOneKey()

//making One Change
function makingOneChange(){
    let oneChangeShow = document.getElementById("oneChange")
    oneChange = Math.floor(Math.random() * 2) + 1
    if(oneChange ==1){
        oneChange = "ထိပ်"
    }else{
        oneChange = "ပိတ်"
    }
    oneChangeShow.innerHTML = oneChange
    // let conH = "03:10"
    let currenH = `${h}:${m}`
    if(currenH < conH){
        setTimeout(makingOneChange, 1000)
    }else{
        clearTimeout(makingOneChange)
        document.getElementById("onePlan").innerHTML = plan
        let oneLike = Math.floor(Math.random() * 10)
        let twoLike = Math.floor(Math.random() * 10)
        let threeLike = Math.floor(Math.random() * 10)
        if(oneChange == "ထိပ်"){
            document.getElementById("likeNumbar").innerHTML = `စိတ်ကြိုက်ဂဏန်း # [${oneKey}${oneLike}] [${oneKey}${twoLike}] [${oneKey}${threeLike}]`
        }else{
            document.getElementById("likeNumbar").innerHTML = `စိတ်ကြိုက်ဂဏန်း # [${oneLike}${oneKey}] [${twoLike}${oneKey}] [${threeLike}${oneKey}]`
        }
    }
}
makingOneChange();

let play = document.getElementById("play");
play.addEventListener('click', () => {
    let audio = document.getElementById("audio");
    audio.play();
})
let i=1;
let nextSong= "";
function setup() {
    document.getElementById('audio').addEventListener('ended', function(){
        i++;
        nextSong = "./src/song"+i+".mp3";
        audioPlayer = document.getElementById('audio');
        audioPlayer.src = nextSong;
        audioPLayer.load();
        audioPlayer.play();
        audioPlayer.loop();
        if(i == 10) {
            i = 1;
        }
    }, false);
}