import axios from 'axios';
import * as variables from '../variables.js';

export const functions = {
    sessionInit: async () => axios.put(`http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/start_session_initialization`,{
        title: 'Session Initialization',
        body: variables.sessionInitBody,
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => console.log(response.data))
    .catch((error) => console.log('error', error))        
};