import {functions} from './winningScenario.js';
import * as variables from '../variables.js';

describe("Winning Scenario", () => {
    test('Session Initialization', async () => {
        const response = await functions.sessionInit(variables.sessionInitBody, variables.header);
        const { status, data, config } = response;
        expect(status).toEqual(200);
        expect(data.licenseePlayerId).toEqual(variables.sessionInitBody.licenseePlayerId);
        expect(data.licenseeSessionId).not.toBeNull();
        expect(data.currency).toEqual(variables.sessionInitBody.currency);
        
        console.log('Request Data', config.data);
        console.log('Response Data', data);
        console.log(`Status: ${response.status} ${response.statusText} & Player ID: ${response.data.licenseePlayerId}`);
    });

    test('Finish Initialization', async () => {
        const response = await functions.sessionInitFinish(variables.sessionInitFinishBody, variables.header);
        const { status, data, config } = response;
        expect(status).toEqual(201);
        console.log('Request Data', config.data);
        console.log(`Status: ${response.status} ${response.statusText}`);
    });

    test('Get Balance', async () => {
        const response = await functions.getBalance(variables.balanceBody, variables.header);
        const {status, data, config} = response;
        const currentBalance = data.balances[0].amount;
        expect(currentBalance).not.toBeNull();
        expect(status).toEqual(200);
        expect(data.balances);
        expect(status).not.toEqual('error');
        console.log('Request Data', config.data);
        console.log('Response Data', data);
        console.log(`Status: ${response.status} ${response.statusText}`)
        console.log(`Player balance = ${currentBalance} ${variables.sessionInitBody.currency}`);
    });

    test('Get Balance for Table', async () => {
        const response = await functions.getTableBalance(variables.balanceTableBody, variables.header);
        const {status, data, config} = response;
        const currentBalance = data.balances[0].amount;
        expect(currentBalance).not.toBeNull();
        expect(status).toEqual(200);
        expect(data.balances);
        console.log('Request Data', config.data);
        console.log('Response Data', data);
        console.log(`Status: ${response.status} ${response.statusText}`)
        console.log(`Table balance = ${currentBalance} ${variables.sessionInitBody.currency}`);
    });
    
    test('Placebet Request', async () => {
        const response = await functions.placeBetFirst(variables.placeBet1Body, variables.header);
        const {status, data, config} = response;
        expect(status).toEqual(200);
        console.log('Request Data', config.data);
        console.log('Response Data', data);
        console.log(`Initial Balance = ${data.balances[0].amount}`);
    });
});
