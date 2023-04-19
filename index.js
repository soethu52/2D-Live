const liveVal = document.getElementById("live");
const updated = document.getElementById("updated");
const set = document.getElementById("set");
const value = document.getElementById("value");
const results = document.getElementById("results");

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
    results.innerHTML = "";
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
        ul.appendChild(li);
    }))
    results.appendChild(ul);
    setTimeout(getData, 1000);
}
getData();

// morning();
let DATE = new Date();
let YEAR = DATE.getFullYear();
let MONTH = DATE.getMonth();
let DAY = DATE.getDate();
console.log(YEAR,MONTH,DAY);

let countDownDate = new Date(`${MONTH+1} ${DAY}, ${YEAR} 12:00:00`).getTime();

var myfunc = setInterval(function() {
    // code goes here
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    // var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    console.log(hours, minutes, seconds);

    // if (timeleft < 0) {
    //     clearInterval(myfunc);
    //     document.getElementById("days").innerHTML = ""
    //     document.getElementById("hours").innerHTML = "" 
    //     document.getElementById("mins").innerHTML = ""
    //     document.getElementById("secs").innerHTML = ""
    //     document.getElementById("end").innerHTML = "TIME UP!!";
    // }

}, 1000)

myfunc