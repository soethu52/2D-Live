const liveVal = document.getElementById("live");
const updated = document.getElementById("updated");
const set = document.getElementById("set");
const value = document.getElementById("value");
const bottom = document.getElementById("bottom");
const session = document.getElementById("session");
const remainTime = document.getElementById("remainTime");

const getData = async () => {
    const fact = await fetch("https://api.thaistock2d.com/live").then((res) => res.json()).then((data)=> {
        return data;
    })
    // console.log(fact);
    const { live,  result, holiday, server_time } = fact;
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
if(HOUR <= 12 && MINUTE == 1) {
    TIME = "12:01:00"
}else if(HOUR <= 16 && MINUTE ==30){
    TIME = "16:30:00";
}else{
    TIME = "0:00:00";
}

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
    if(hours == 0){
        showText = `${minutes} မိနစ် ${seconds} စက္ကန့်သာလိုပါတော့သည်။`;
    }else if(minutes == 0 ){
        showText = `${seconds} စက္ကန့်သာလိုပါတော့သည်။`;
    }else if(seconds == 0){
        showText = `ပေါက်ဂဏန်းထွက်ပါပြီ`;
    }else if(hours < 0){
        showText = `ပေါက်ဂဏန်းများထွက်ပြီးပါပြီး`;
    }else{
        showText = `${hours} နာရီ ${minutes} မိနစ် ${seconds} စက္ကန့်သာလိုပါတော့သည်။`;
    }
    remainTime.innerHTML = showText
}, 1000);