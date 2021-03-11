import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// const onExpenseChanges = database.ref('expense')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// const onExpenseChanges = database.ref('expense')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

// const expense1 = database.ref('expense').push({
//     description: "gummy",
//     note: "yum yum",
//     amount: 15,
//     createdAt: 100
// })

// const expense2 = database.ref('expense').push({
//     description: "water bill",
//     note: "splish",
//     amount: 450.89,
//     createdAt: 1010
// })

// const expense3 = database.ref('expense').push({
//     description: "electricity",
//     note: "shock",
//     amount: 328.21,
//     createdAt: 1011
// })



// database.ref('expense/-MVKvMyPB-OMGwjfbgwV').update({
//     description: "cherry pie"
// })

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         const name = val['name']
//         const job_title = val['job']['title'];
//         const job_company = val['job']['company'];
//         console.log(`${name} is a ${job_title} at ${job_company}`);
//     });

//     database.ref().set({
//         name: "Mario",
//         isMarried: false,
//         age: 35,
//         stressLevel: 6, 
//         job: {
//             title: 'Plumber',
//             company: 'Mario Bros. Plumbing'
//         },
//         location: {
//             city: 'New York',
//             country: 'United States'
//         }
//     }).then(() => {
//         console.log('Data is saved');
//     }).catch((e) => {
//         console.log('Save failed: ', e);
//     });

// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Unable to get data: ', e);
// });


// database.ref().update({
//     "stressLevel": 9,
//     "job/company": 'Mario\'s Cement Factory',
//     'location/city': 'Boston, Massachusetts'
// });

// database.ref('age').set(36);
// database.ref('location/city').set('Brooklyn, New York');

// database.ref('attributes').set({
//     height: 149,
//     weight: 62
// }).then(() => {
//     console.log('Changes have been saved.');
// }).catch((e) => {
//     console.log('Changes failed to save: ', e);
// });

// database.ref('isMarried').remove().then(() => {
//     console.log('Field removed');
// }).catch((e) => {
//     console.log('Failed to remove field: ', e);
// });
