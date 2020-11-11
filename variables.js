'use strict';
//Pre-request Scripts
export function setEnvironmentVariable() {
    var getRandomId = (idLength) => {
        let id = "inttest";
        let idPrefixLength = id.length;
        let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < idLength - idPrefixLength; i++) {
            id += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return id;
    };
    var getRandomNumericId = (idLength) => {
        let id = "707";
        let idPrefixLength = id.length;
        let charset = "123456789";
        for (let i = 0; i < idLength - idPrefixLength; i++) {
            id += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return id;
    };
    return {
        idGeneration: {
            getRandomId,
            getRandomNumericId
        }
    };
}

//Global Variables
export let globalVariables = {
    //hardcoded block
    casinoId: '0rnu7w1c8xhbuhtn',
    licenseePlayerId: 'abcdef',
    playerId: 'insertPlayerId',
    gameType: 'csp',
    tableId: 'CSPTable00000001',
    virtualTableId: null,
    bet: 5,
    bet1: 8,
    bet2: 10,
    payoff: 10,
    payoff1: 5,
    payoff2: 30,
    balanceType: 'combined',
    rbowF5Domain: '10.10.88.52',
    rbowPort: 9092,
    clientIpAddress: '127.0.0.1',
    currency: 'EUR',
    channelType: 'Phone',
    channelOs: 'Other',
    //variables that use pre-scripter value generator
    correlationId: setEnvironmentVariable().idGeneration.getRandomId(32),
    sessionId: setEnvironmentVariable().idGeneration.getRandomId(32),
    licenseeSessionId: setEnvironmentVariable().idGeneration.getRandomId(32)
};