//  For Calculate Button Click Event 

document.getElementById('calculate-button').addEventListener('click', function () {
    calculate();
});

//  For Saving Button Click Event 

document.getElementById('save-button').addEventListener('click', function () {
    calculate();

    const savePercentageInput = document.getElementById('save-percentage');
    const savingAmountText = document.getElementById('saving-amount');
    const remainingBalanceText = document.getElementById('remaining-balance');

    const savePercentageText = savePercentageInput.innerText;
    const savePercentageValue = parseFloat(savePercentageText);
    const savePercentageAmount = (incomeAmount * savePercentageValue) / 100;

    // error-saving-message for wrong type of number
    // invalid-saving-message for abnormal income and savings

    const errorSavingMessage = document.getElementById('error-saving-message');
    const invalidSavingMessage = document.getElementById('invalid-saving-message');

    if (typeof savePercentageValue != 'number' || savePercentageValue < 0 || isNaN(incomeAmount)) {
        invalidSavingMessage.style.display = 'none';
        errorSavingMessage.style.display = 'block';
    }
    else {
        invalidSavingMessage.style.display = 'none';
        errorSavingMessage.style.display = 'none';
        //--------------------------Pending
        savingAmountText.innerText = savePercentageAmount;
        remainingBalanceText.innerText = balanceAmount - savePercentageAmount;

    }
});

// calculate function

function calculate() {
    const incomeInput = document.getElementById('income-input');
    const foodExpenseInput = document.getElementById('food-expense');
    const rentExpenseInput = document.getElementById('rent-expense');
    const clothExpenseInput = document.getElementById('cloth-expense');

    const totalExpense = document.getElementById('total-expense');
    const balance = document.getElementById('balance');

    const incomeAmount = parseFloat(incomeInput.value);
    const foodExpenseAmount = parseFloat(foodExpenseInput.value);
    const rentExpenseAmount = parseFloat(rentExpenseInput.value);
    const clothExpenseAmount = parseFloat(clothExpenseInput.value);

    const totalExpenseAmount = foodExpenseAmount + rentExpenseAmount + clothExpenseAmount;
    const balanceAmount = incomeAmount - totalExpenseAmount;

    // errorMessage for wrong type of number
    // invalidMessage for abnormal income and over expenses

    const errorMessage = document.getElementById('error-message');
    const invalidMessage = document.getElementById('invalid-message');

    if (typeof incomeAmount != 'number' || incomeAmount <= 0 || isNaN(incomeAmount)) {
        invalidMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
    else if (totalExpenseAmount > incomeAmount) {
        invalidMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        invalidMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        totalExpense.innerText = totalExpenseAmount;
        balance.innerText = balanceAmount;
    }
}

