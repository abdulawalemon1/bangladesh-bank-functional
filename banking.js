function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;

}
function getInnerTextValue(fieldId) {
    const inputFieldTag = document.getElementById(fieldId);
    const inputValue = parseFloat(inputFieldTag.innerText);
    return inputValue;
}
function updateTotal(fieldId, amount) {

    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;


}

function updateBalance(amount, isAdding) {

    const previousBalance = getInnerTextValue('balance-total');

    if (isAdding == true) {
        const newBalance = previousBalance + amount;
        document.getElementById('balance-total').innerText = newBalance;
    } else {
        const newBalance = previousBalance - amount;
        document.getElementById('balance-total').innerText = newBalance;
    }


}
//deposite button
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }

})

//withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');

    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }

})