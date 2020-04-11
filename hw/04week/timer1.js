let cnt = 0

function printCurrentTime() {
    console.log("현재시각은", new Date())
    cnt++
    
    if (cnt == 10) {
        clearInterval(id)
    }
}

let id = setInterval(printCurrentTime, 1000)