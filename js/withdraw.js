document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step : 2 get the withdraw input field value
    let newWithdrawAmount = document.getElementById('withdraw-amount');
    let getNewWithdrawAmoutString = newWithdrawAmount.value;

    let getNewWithdrawAmount = parseFloat(getNewWithdrawAmoutString);
    newWithdrawAmount.value = '';
    //step : 3 get the withdraw showing place 
    let totalWithdrawInput = document.getElementById('total-withdraw');
    let totalWithdrawAmountString = totalWithdrawInput.innerText;

    let previousWithdrawAmount = parseFloat(totalWithdrawAmountString);

    // step : 4 calculate the previous and input withdraw value and update the place 
    
    let currentWithdrawAmount = previousWithdrawAmount + getNewWithdrawAmount;

    totalWithdrawInput.innerText = currentWithdrawAmount;

    //step : 5 get balance showing place 
    let totalBalanceInput = document.getElementById('total-balance');
    let totalBalanceAmountString = totalBalanceInput.innerText;

    let previousBalanceAmount = parseFloat(totalBalanceAmountString);

    //step : 6 calculate previous balance and current balance in fixed place

    let currentBalanceAmount = previousBalanceAmount - getNewWithdrawAmount;

    totalBalanceInput.innerText = currentBalanceAmount;
})