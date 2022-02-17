//  For Calculate Button Click Event 

document.getElementById('calculate-button').addEventListener('click', function () {
    calculate();
});

//  For Saving Button Click Event 

document.getElementById('save-button').addEventListener('click', function () {
    calculate();
    savings();
});

// set default value (0) into Saving Amount and Remaining Balance field when any error occured during Save button click.
function setDefaultSave() {
    const savingAmountText = document.getElementById('saving-amount');
    const remainingBalanceText = document.getElementById('remaining-balance');
    savingAmountText.innerText = '0';
    remainingBalanceText.innerText = '0';
}

// set default value (0) into Total Expense and Balance field when any error occured during Calculate button click.
function setDefaultExpense() {
    const totalExpense = document.getElementById('total-expense');
    const balance = document.getElementById('balance');
    totalExpense.innerText = '0';
    balance.innerText = '0';
}

// savings function for Save button click event
function savings() {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    const balance = document.getElementById('balance');
    const balanceAmount = parseFloat(balance.innerText);

    const savePercentageInput = document.getElementById('save-percentage');
    const savingAmountText = document.getElementById('saving-amount');
    const remainingBalanceText = document.getElementById('remaining-balance');

    const savePercentageText = savePercentageInput.value;
    const savePercentageValue = parseFloat(savePercentageText);
    const savePercentageAmount = (incomeAmount * savePercentageValue) / 100;

    const savingAmount = parseFloat(savingAmountText.innerText);

    // errorSavingMessage for wrong type of number
    // invalidSavingMessage for abnormal income and savings

    const errorSavingMessage = document.getElementById('error-saving-message');
    const invalidSavingMessage = document.getElementById('invalid-saving-message');

    if (typeof savePercentageValue != 'number' || savePercentageValue < 0 || isNaN(savePercentageValue)) {
        invalidSavingMessage.style.display = 'none';
        errorSavingMessage.style.display = 'block';

        setDefaultSave();
    }
    else if (savePercentageAmount > balanceAmount) {
        invalidSavingMessage.style.display = 'block';
        errorSavingMessage.style.display = 'none';

        setDefaultSave();
    }
    else {
        invalidSavingMessage.style.display = 'none';
        errorSavingMessage.style.display = 'none';

        savingAmountText.innerText = savePercentageAmount;
        remainingBalanceText.innerText = balanceAmount - savePercentageAmount;
    }
}

// calculate function for Calculate button click event

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

    if (incomeAmount < 0 || isNaN(incomeAmount) ||
        foodExpenseAmount < 0 || isNaN(foodExpenseAmount) ||
        rentExpenseAmount < 0 || isNaN(rentExpenseAmount) ||
        clothExpenseAmount < 0 || isNaN(clothExpenseAmount)
    ) {
        invalidMessage.style.display = 'none';
        errorMessage.style.display = 'block';

        setDefaultExpense();
        setDefaultSave();
    }
    else if (totalExpenseAmount > incomeAmount) {
        invalidMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        setDefaultExpense();
        setDefaultSave();
    }
    else {
        invalidMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        totalExpense.innerText = totalExpenseAmount;
        balance.innerText = balanceAmount;
    }
}

