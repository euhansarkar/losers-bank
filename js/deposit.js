document.getElementById('btn-deposit').addEventListener('click', function(){
    //step : 2  get the deposit input field and catch the inputed value
    let newDepositAmount = document.getElementById('deposit-amount');
    let getNewDepositAmountString = newDepositAmount.value;
    let getNewDepositAmount = parseFloat(getNewDepositAmountString);

    // clean the input field 
    newDepositAmount.value = '';
    // step : 3 get the deposit amount showing place 
    let totalDepositInput = document.getElementById('total-deposit');
    let totalDepositInputString = totalDepositInput.innerText;
    
    let previousDepositAmount = parseFloat(totalDepositInputString);

    // step : 4 let calculate the previous and current deposit amount 
    let currentDepositAmount = previousDepositAmount + getNewDepositAmount;

    // step : 5 let get the total balance amount 
    let totalBalanceInput = document.getElementById('total-balance');
    let totalBalanceInputString = totalBalanceInput.innerText;

    let previousBalanceAmount = parseFloat(totalBalanceInputString);

    // step : 6 let get the previous and current balance amount 
    let currentBalanceAmount = previousBalanceAmount + getNewDepositAmount;

    //step : 7 let add the final diposit and balance amount calculation in the fixed place
    totalDepositInput.innerText = currentDepositAmount;
    totalBalanceInput.innerText = currentBalanceAmount;
})