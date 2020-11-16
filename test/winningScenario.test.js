import {functions} from './winningScenario.js';
import pkg from '@jest/globals';
const {describe, test, expect} = pkg;
describe("wwww", ()=>{
    test('Session Initialization', async () => {
        expect.objectContaining(JSON);
        const data = await functions.sessionInit();
        expect(data.status).toEqual(200);
        // expect(data.JSON)
    });
})
