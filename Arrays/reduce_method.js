const transactions = [
    { description: 'Groceries', amount: -50 },
    { description: 'Salary', amount: 2000 },
    { description: 'Coffee', amount: -5 },
    { description: 'Bookstore', amount: -20 }
  ];
  
  const totalBalance = transactions.reduce((accumulator, transaction) => {
    const newBalance = accumulator + transaction.amount;
    console.log(`Updated balance: ${newBalance}`);
    return newBalance;
  }, 0);
  
  console.log(`Total Balance: ${totalBalance}`);
  