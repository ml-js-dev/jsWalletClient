'use strict';

const { default: Axios } = require("axios");
import * as variables from '../variables';

const functions = {
    fetchUser: () => Axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(error => 'error'),
    
    sessionInit: function async () {
        Axios.put(`http://${variables.globalVariables.rbowF5Domain}:${variables.globalVariables.rbowPort}/onewallet/api3/start_session_initialization`)
    }
};

module.exports = functions;


