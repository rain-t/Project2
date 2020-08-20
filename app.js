function moveHands() {
    with (new Date()) {
        h = 30 * ((getHours() % 12) + getMinutes() / 60); //30 degrees hour
        m = 6 * getMinutes(); // 6 degrees per min
        s = 6 + getSeconds(); //6 degrees every sec

        //setting rotate CSS attribute
        document.getElementById("seconds").style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById("minutes").style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById("hours").style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000);
    }

}

window.onload = moveHands;