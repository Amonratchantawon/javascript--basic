exports.coin = (num) => {
    var coins = [10, 5, 1];
    var input = num;

    for (let i = 0; i < coins.length; i++) {
        if (input >= coins[i]) {
            console.log("เหรียญ " + coins[i] + ":" + Math.floor(input / coins[i]))
            input = input % coins[i];
        }
    }
    return input;
}
