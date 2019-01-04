// var input = '13+7*1-5'

var input = 1536;
// var i = 0;
var cointen = 0;
var coinmodten = 0;

var coinfive = 0;
var coinmodfive = 0;

var coinone = 0;
var coinmodone = 0;


if (input >= 10) {
    if (input >= 10) {
        cointen = Math.floor(input / 10);
        coinmodten = input % 10;
    }
    if (coinmodten <= 5) {
        coinone = Math.floor(coinmodten / 1);
    }
    if (coinmodten > 5) {
        coinfive = Math.floor(coinmodten / 5);
        coinmodfive = coinmodten % 5;
    }

    if (coinmodfive >= 1) {
        coinone = Math.floor(coinmodfive / 1);
    }
} else if (input >= 5) {

    if (input >= 5) {
        coinfive = Math.floor(input / 5);
        coinmodfive = input % 5;
    }

    if (coinmodfive >= 1) {
        coinone = Math.floor(coinmodfive / 1);
    }

} else {
    if (input >= 1) {
        coinone = Math.floor(input / 1);
    }
}

console.log("เหรียญสิบ", cointen, "เหรียญ");
console.log("เหรียญห้า", coinfive, "เหรียญ")
console.log("เหรียญบาท", coinone, "เหรียญ")