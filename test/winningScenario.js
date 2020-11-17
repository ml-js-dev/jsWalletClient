import axios from 'axios';
import * as variables from '../variables.js';

export const functions = {
    sessionInit: (body) => {
        return axios
            .put(`http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/start_session_initialization`, 
                {...body}, 
                {
                    headers: {'Content-Type': 'application/json'}
                });
    },
};