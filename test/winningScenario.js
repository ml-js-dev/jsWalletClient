import axios from 'axios';
import * as variables from '../variables.js';

export const functions = {
    sessionInit: (body, header) => {
        return axios.put(
            `http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/start_session_initialization`, 
            {...body}, {...header}
        )},

    sessionInitFinish: (body, header) => {
        return axios.put(
            `http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/complete_session_initialization`, 
            {...body}, {header}
        )},
    
    getBalance: (body, header) => {
        console.log('eer', body);
        return axios.post(
            `http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/get_balance`,
            {...body}, {...header}
        )},
    
    getTableBalance: (body, header) => {
        return axios.post(
            `http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/get_balance`,
            {...body}, {...header}
        )},
    
    placeBetFirst: (body, header) => {
        return axios.put(
            `http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/withdrawal`,
            {...body}, {...header}
        )},

    placeBetSecond: (body, header) => {
        return axios.put(
            `http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/withdrawal`,
            {...body}, {...header}
        )},

    finalSettlement: (body, header) => {
        return axios.put(
            `http://${variables.globals.rbowF5Domain}:${variables.globals.rbowPort}/onewallet/api3/final_settlement`,
            {...body}, {...header}
        )},
    }