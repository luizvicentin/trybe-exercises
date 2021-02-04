const functions = require("./functions");

// toBe
test( 'Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test( 'Adds 2 + 2 to Not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

  // toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

  //toEqual → Object or Array
test('User should be Luiz Vicentin object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Luiz',
        lastName: 'Vicentin',
    });
});

// Less than and greater than
test('Should be under 1700', () => {
    const load1 = 800;
    const load2 = 900;
    expect(load1 + load2).toBeLessThanOrEqual(1700);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
  });
  
  // Arrays
  test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
  });
  
//   // Working with async data
  
//   // Promise
//   // test('User fetched name should be Leanne Graham', () => {
//   //   expect.assertions(1);
//   //   return functions.fetchUser().then(data => {
//   //     expect(data.name).toEqual('Leanne Graham');
//   //   });
//   // });
  
//   // Async Await
//   test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
//   });