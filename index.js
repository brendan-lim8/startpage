function showTime() {
    const date = new Date();

    let today = date.toLocaleString("en", { weekday: "long" });
    let time = date.toLocaleString("en", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
    let day = date.toLocaleString("en", { day: "2-digit" });
    let month = date.toLocaleString("en", { month: "2-digit" });
    let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date"
	).innerHTML = `${today}, ${hour}:${minute} | ${day}/${month}/${year}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();
