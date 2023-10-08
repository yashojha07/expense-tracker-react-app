const incomeColors = [
    '#2E86DE',
    '#3498DB',
    '#5DADE2',
    '#85C1E9',
    '#AED6F1',
    '#D6EAF8',
    '#73C6B6',
    '#A3E4D7',
    '#48C9B0',
    '#16A085',
];

const expenseColors = [
    '#E74C3C',
    '#EC7063',
    '#F1948A',
    '#F5B7B1',
    '#FADBD8',
    '#EB984E',
    '#F7DC6F',
    '#F0E68C',
    '#F4D03F',
    '#7D6608',
    '#D4AC0D',
];

export const incomeCategories = [
    { type: 'Business', amount: 0, color: incomeColors[0] },
    { type: 'Investments', amount: 0, color: incomeColors[1] },
    { type: 'Extra Income', amount: 0, color: incomeColors[2] },
    { type: 'Deposits', amount: 0, color: incomeColors[3] },
    { type: 'Lottery', amount: 0, color: incomeColors[4] },
    { type: 'Gifts', amount: 0, color: incomeColors[5] },
    { type: 'Salary', amount: 0, color: incomeColors[6] },
    { type: 'Savings', amount: 0, color: incomeColors[7] },
    { type: 'Rental Income', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
    { type: 'Bills', amount: 0, color: expenseColors[0] },
    { type: 'Car', amount: 0, color: expenseColors[1] },
    { type: 'Clothes', amount: 0, color: expenseColors[2] },
    { type: 'Travel', amount: 0, color: expenseColors[3] },
    { type: 'Food', amount: 0, color: expenseColors[4] },
    { type: 'Shopping', amount: 0, color: expenseColors[5] },
    { type: 'House', amount: 0, color: expenseColors[6] },
    { type: 'Entertainment', amount: 0, color: expenseColors[7] },
    { type: 'Phone', amount: 0, color: expenseColors[8] },
    { type: 'Pets', amount: 0, color: expenseColors[9] },
    { type: 'Other', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
    incomeCategories.forEach(c => (c.amount = 0));
    expenseCategories.forEach(c => (c.amount = 0));
};
