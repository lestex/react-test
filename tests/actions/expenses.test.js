import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';

test('shoud setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('shoud setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'test' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'test'
        }
    })
});

test('shoud setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 120,
        createdAt: 1000,
        note: 'this is month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('shoud setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            createdAt: 0,
            amount: 0
        }
    })
});
