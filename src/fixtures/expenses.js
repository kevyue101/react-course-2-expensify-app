import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 123,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 98000,
    createdAt: moment(0).subtract(5, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 12000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
