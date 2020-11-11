const { default: Axios } = require("axios");

const functions = {
    fetchUser: () => Axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(error => 'error')
};

module.exports = functions;


