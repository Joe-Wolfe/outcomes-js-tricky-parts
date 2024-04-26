function createAccount(accountPin, amount = 0) {

    let pin = accountPin;
    let balance = amount;

    return {

        checkBalance: function (inputPin) {
            return inputPin === pin ? `$${balance}` : "Invalid PIN.";
        },

        deposit: function (inputPin, depositAmt) {
            if (inputPin !== pin) { return "Invalid PIN." }

            balance += depositAmt;

            return `Successfully deposited $${depositAmt}. Current balance: $${balance}.`
        },

        withdraw: function (inputPin, withdrawAmt) {
            if (inputPin !== pin) { return "Invalid PIN." }

            if (balance < withdrawAmt) { return "Withdrawal amount exceeds account balance. Transaction cancelled." }

            balance -= withdrawAmt;

            return `Successfully withdrew $${withdrawAmt}. Current balance: $${balance}.`
        },

        changePin: function (inputPin, newPin) {
            if (inputPin !== pin) { return "Invalid PIN." }

            pin = newPin;
            return "PIN successfully changed!";
        }
    }
}




module.exports = { createAccount };
