function showTime() {
    const date = new Date();

    let today = date.toLocaleString("en", { weekday: "long" });
    let hour = date.toLocaleString("en", { hour: "2-digit", hour12: true });
    let minute = date.toLocaleString("en", { minute: "2-digit" });
    let second = date.toLocaleString("en", { second: "2-digit" });
    let day = date.toLocaleString("en", { day: "2-digit" });
    let month = date.toLocaleString("en", { month: "2-digit" });
    let year = date.toLocaleString("en", { year: "numeric" });

    minute = addZero(minute);
    second = addZero(second);

    let ampm = date.toLocaleString("en", { hour: "numeric", hour12: true, hourCycle: "h23" });

    document.getElementById(
        "date"
    ).innerHTML = `${today}, ${hour}:${minute} ${ampm} | ${day}/${month}/${year}`;
    setTimeout(showTime, 1000); // Update every second
}

function addZero(i) {
    if (i.length < 2) i = "0" + i;
    return i;
}

showTime();
