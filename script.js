const bpm_div = document.getElementById('bpm-output');
firstTap = 0
oldTap = 0
lastTap = 0 
timesTapped = 0
diff = 0
averageBPM = 0
timeElapsed = 0

function calcBPM() {
    if (lastTap === 0) {
        timesTapped = 0
        firstTap = new Date().getTime()
    }
    lastTap = new Date().getTime();
    elapsed = new Date().getTime() - oldTap;
    oldTap = lastTap
    diff = lastTap - firstTap
    if (diff) {
        averageBPM = Math.round((60000 * timesTapped) / diff);
    }
    timesTapped++

    bpm_div.innerHTML = averageBPM
}
function resetBPM() {
    firstTap = 0
    oldTap = 0
    lastTap = 0 
    timesTapped = 0
    diff = 0
    averageBPM = 0
    timeElapsed = 0
    bpm_div.innerHTML = "0"
}

function metronome() {

}