

    document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log('click here');

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please Provide A Valid Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    


    if(newWithdrawAmount > previousBalanceTotal){
        alert('Tham Beta Tor Account a Taka Nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    totalBalanceElement.innerText = newBalanceTotal;

})