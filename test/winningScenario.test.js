const { test, expect } = require('@jest/globals');
const functions = require('./winningScenario');

// Working with async data
// Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     })
// });

//Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

test('Session Initialization', async () => {
    expect.objectContaining(JSON);

});