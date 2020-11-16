import functions from '../winningScenario.js';
import {describe, test, expect} from '@jest/globals';

describe("wwww", ()=>{
    test('Session Initialization', async () => {
        expect.objectContaining(JSON);
        const data = await functions.sessionInit();
        expect(data.JSON)
    
    });
})
