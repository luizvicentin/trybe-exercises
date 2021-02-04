const functions = {
    add: (num1, num2) => num1 + num2,
    // add: function(num1, num2) {
    //     return num1 + num2;
    // };
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
      const user = { firstName: 'Luiz' };
      user['lastName'] = 'Vicentin';
      return user;
    },
    // fetchUser: () =>
    // axios → should install npm i axios
    //   .get('https://jsonplaceholder.typicode.com/users/1')
    //   .then(res => res.data)
    //   .catch(err => 'error')
};

// const sum = (a, b) => a + b;
module.exports = functions;