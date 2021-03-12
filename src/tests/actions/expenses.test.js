import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    startEditExpense,
    removeExpense, 
    startRemoveExpense,
    setExpenses, 
    startSetExpenses 
} from '../../actions/expenses';
import expenses from '../../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = "testuser";
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    // forEach is asynchronous so you need "done" to wait for it
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense("123abc", { note: 'meow'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'meow'}
    });
});

test('should setup add expense action object when parameters defined', () =>{
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database', (done) =>{
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 250,
        note: "This one is ergonomic",
        createdAt: 1000
    };
    // Example of Promise chaining
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should setup add expense action object when parameters not defined', (done) =>{
    const store = createMockStore(defaultAuthState);
    const emptyExpense = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    }
    // Example of Promise chaining
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...emptyExpense
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(emptyExpense);
        done();
    });
});

test('should set up expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from server', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should remove expenses from server', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    
    store.dispatch(startRemoveExpense({id})).then((snapshot) => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.exists()).toBeFalsy();
        done();
    });
});

test('should edit expense from server', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const note = "hello there";
    const updates = { note }
    
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().note).toEqual(note);
        done();
    });
});