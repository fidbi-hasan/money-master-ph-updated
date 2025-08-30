document.getElementById('calculate-btn').addEventListener('click', () => {
  const income = getInputFieldValueById("income");
  const food = getInputFieldValueById("food");
  const rent = getInputFieldValueById("rent");
  const clothes = getInputFieldValueById("clothes");

  // check for negative inputs (invalid)
  if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
    alert("Inputs must be positive numbers");
    return;
  }

  // check for empty fields (invalid)
  if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    alert("Input fields cannot be empty!");
    return;
  }
  
  // calculate expense
  const expense = food + rent + clothes;

  // calculate balance
  const balance = income - expense;

  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
});

document.getElementById('calculate-savings-btn').addEventListener('click', () => {
  // calculate saving amount
  const savePercentage = getInputFieldValueById("save");
  const income = getInputFieldValueById('income');

  // Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  
  const savingAmount = income * (savePercentage / 100);

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
});