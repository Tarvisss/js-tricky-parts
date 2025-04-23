function createAccount(pin, amount) {
    let balance = amount
    let currentPin = pin

    function checkBalance(inputPin) {
        if (inputPin !== currentPin) return "Invalid PIN.";
        return `$${balance}`;
    }
    function deposit(inputPin, depositAmount){
        if(inputPin !== currentPin) return "Invalid Pi"
        if (typeof depositAmount !== "number" || depositAmount <= 0) return "invalid deposit"
        balance += depositAmount;
    return `Successful deposit in the amount of ${depositAmount}. current Balance $${balance}`;
    }
    function withdraw(inputPin, withdrawAmount){
        if (inputPin !== currentPin) return "Invalid PIN.";
        if(typeof withdrawAmount !== "number") return "bad request enter a number"
        if (balance < withdrawAmount) return "invalid funds...:("
        balance -= withdrawAmount;
        return `Successful withdraw in the amount of ${withdrawAmount}. current Balance $${balance}`;
    }
    function changePin(inputPin, newPin){
        if(inputPin !== currentPin) return "invalid Pin"
        currentPin = newPin;
        return "PIN Changed "
    }
    return {
        checkBalance,
        deposit,
        withdraw,
        changePin
    };
}

module.exports = { createAccount };
