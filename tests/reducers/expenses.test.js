//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [
//                 ...state,
//                 action.expense
//             ];
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if (expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     }
//                 } else {
//                     return expense;
//                 }
//             });


import expensesReducer from '../../src/reducers/expenses';
import { expenses } from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'} )
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '100',
        description: 'Macbook',
        note: '',
        createdAt: 20000,
        amount: '100500'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 10000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);    
    expect(state[2].amount).toBe(amount);
});

test('should not edit an expense if expense not found', () => {
    const amount = 10000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);    
    expect(state).toEqual(expenses);
});
