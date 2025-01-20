function UpdateClock() {
    const date = new Date();
    const Hours = date.getHours().toString().padStart(2, 0);
    const Min = date.getMinutes().toString().padStart(2, 0);
    const Sec = date.getSeconds().toString().padStart(2, 0);

    document.getElementById(`Clock`).innerHTML = `${Hours}:${Min}:${Sec}`;
};

UpdateClock();

setInterval(UpdateClock, 1000)