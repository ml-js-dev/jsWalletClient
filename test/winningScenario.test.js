const { test, expect } = require('@jest/globals');
const functions = require('./winningScenario');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBe(null);
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('Should be Maxim Lee object', () => {
    expect(functions.createUser()).toStrictEqual({firstName: 'Maxim', lastName: 'Lee'});
});

test('Should be under 1600', () => {
    const load1 = 800,
          load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//RegEx
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'nurik', 'admin'];
    expect(usernames).toContain('admin');
});

//Working with async data
//Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

//Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});