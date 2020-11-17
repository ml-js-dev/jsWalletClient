import {functions} from './winningScenario.js';
import * as variables from '../variables.js';

describe("wwww", () => {
    test('Session Initialization', async () => {
        expect.objectContaining(JSON);

        const response = await functions.sessionInit(variables.sessionInitBody);
        const { status, data, config } = response;
        
        console.log("Request data", config.data);
        
        expect(status).toEqual(200);
        
        console.log("Response data", data)
    });
})
