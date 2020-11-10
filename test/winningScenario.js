const { default: Axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: 'Maxim'}
        user['lastName'] = 'Lee';
        return user;
    },
    fetchUser: () => Axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(error => 'error')
};

module.exports = functions;

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined matches only defined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false