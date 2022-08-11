const fs = require("fs");

const Dir = fs.readdirSync("junks");

var Sizes = 0;
var HowMany = 0;

function TimeStamp() {
    const utc = new Date().getTime();
    return utc;
}

const StartTime = TimeStamp();
 
Dir.forEach((val) => {
    if (fs.existsSync(`junks/${val}`)) {
        Sizes+=(fs.statSync(`junks/${val}`).size);
        fs.unlinkSync(`junks/${val}`);
        HowMany++;
    }
})

console.log(`Deleted ${HowMany} files (Size total of ${Sizes / 1000000} MB) in ${(TimeStamp() - StartTime) / 1000} Seconds!`);