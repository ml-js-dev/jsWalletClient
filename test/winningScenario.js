const {
    default: Axios
} = require("axios");
import * as variables from './variables';

const functions = {
    fetchUser: () => Axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(error => 'error'),

    sessionInit: function async () {
        Axios.put(`http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/start_session_initialization`,
        variables.sessionInitBody)}
    
};

module.exports = functions;