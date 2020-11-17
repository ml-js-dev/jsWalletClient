import {functions} from './winningScenario.js';
import * as variables from '../variables.js';

describe("Winning Scenario", () => {
    test('Session Initialization', async () => {
        const response = await functions.sessionInit(variables.sessionInitBody, variables.header);
        const { status, data, config } = response;
        expect(data.licenseeSessionId).toEqual(variables.sessionInitBody.licenseeSessionId);
        expect(status).toEqual(200);
        
        console.log('Request Data', config.data);
        console.log('Response Data', data);
        console.log(`Status: ${response.status} ${response.statusText}`);
    });

    test('Finish Initialization', async () => {
        const response = await functions.sessionInitFinish(variables.sessionInitFinishBody, variables.header);
        const { status, data, config } = response;
        expect(status).toEqual(201);
        console.log('Request Data', config.data);
        console.log('Response Data');
        console.log(`Status: ${response.status} ${response.statusText}`);
    });

    // test('Get Balance', async () => {
    //     // let response;
    //     // try {
    //     //     response = await functions.getBalance(variables.balanceBody, variables.header);
    //     // } catch(e) {
    //     //     // Err
    //     // }
        
    //     const {status, data, config} = response;
    //     console.log('Request Data', config.data);
    //     console.log('Response Data', data);
    //     console.log(`Status: ${response.status} ${response.statusText}`)
    //     expect(status).toEqual(200);
    // });
});
