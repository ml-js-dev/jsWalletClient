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
    var getMixedId = (idLength) => {
        let idGeneration = {
          randomId: this.getRandomId(idLength),
          randomNumericId: this.getRandomNumericId(idLength)
        };
        return idGeneration;
      };
    // return {
    //     idGeneration: {
    //         getRandomId,
    //         getRandomNumericId
    //     }
    // };
};

//Global Variables
export let globals = {
    //hardcoded block
    casinoId: 'ladbrokes0000001',
    licenseePlayerId: 'abcdef',
    playerId: 'oweszi5b3qhaabdw',
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
    channelWrapped: false,
    betCode1: 'CSPBet0000000001',
    betCode2: 'CSPBet0000000002',
    betCode3: 'CSPBet0000000003',

    //variables that use pre-scripter value generator
    correlationId: setEnvironmentVariable().idGeneration.getRandomId(32),
    sessionId: setEnvironmentVariable().idGeneration.getRandomId(32),
    licenseeSessionId: setEnvironmentVariable().idGeneration.getRandomId(32),
    betId: setEnvironmentVariable().idGeneration.getRandomId(32),
    betId2: setEnvironmentVariable().idGeneration.getRandomId(32),
    betId3: setEnvironmentVariable().idGeneration.getRandomId(32),
    txId1: setEnvironmentVariable().idGeneration.getRandomNumericId(18),
    txId2: setEnvironmentVariable().idGeneration.getRandomNumericId(18),
    gameId: setEnvironmentVariable().idGeneration.getRandomId(24)
};

export let placeTime = new Date().toJSON();

//header
export const header = {'Content-Type': 'application/json'};

//body of the requests
export const sessionInitBody = {
    "correlationId": globals.correlationId,
    "sessionId": globals.sessionId,
    "casinoId": globals.casinoId,
    "licenseeSessionId": globals.licenseeSessionId,
    "currency": globals.currency,
    "licenseePlayerId": globals.licenseePlayerId,
    "channel": {
        "type": globals.channelType,
        "wrapped": globals.channelWrapped,
        "os": globals.channelOs
    },
    "clientIpAddress": globals.clientIpAddress
};

export const sessionInitFinishBody = {
    "correlationId": globals.correlationId,
    "sessionId": globals.sessionId,
    "playerId": globals.playerId,
    "channel": {
        "type": globals.channelType,
        "wrapped": globals.channelWrapped,
        "os": globals.channelOs
    }
};

export const balanceBody = {
    "correlationId": globals.correlationId,
    "sessionId": globals.sessionId,
    "balanceId": globals.balanceType
};

export const balanceTableBody = {
    "correlationId": globals.correlationId,
    "sessionId": globals.sessionId,
    "table": {
        "tableId": globals.tableId,
        "virtualTableId": globals.virtualTableId
    },
    "gameType": globals.gameType,
    "balanceId": globals.balanceType
};

export const placeBet1Body = {
    "correlationId": globals.correlationId,
    "gameId": "{{gameId}}",
    "sessionId": globals.sessionId,
    "txId": "{{txId1}}",
    "gameType": globals.gameType,
    "table": {
        "tableId": globals.tableId,
        "virtualTableId": globals.virtualTableId
    },
    "bets": [{
        "betId": globals.betId,
        "code": globals.betCode1,
        "amount": globals.bet
    }],
    "placeTime": globals.placeTime,
    "balanceId": globals.balanceType
};

export const placeBet2Body = {
    "correlationId": globals.correlationId,
    "gameId": "{{gameId}}",
    "sessionId": globals.sessionId,
    "txId": "{{txId1}}",
    "gameType": globals.gameType,
    "table": {
        "tableId": globals.tableId,
        "virtualTableId": globals.virtualTableId
    },
    "bets": [{
            "betId": globals.betId2,
            "code": globals.betCode2,
            "amount": globals.bet1
        },
        {
            "betId": globals.betId3,
            "code": globals.betCode3,
            "amount": globals.bet2
        }
    ],
    "placeTime": globals.placeTime,
    "balanceId": globals.balanceType
};

export const finalSettlementBody = {
    "correlationId": globals.correlationId,
    "gameId": globals.gameId,
    "reason": {
        "type": "GameFinished",
        "finishedTransactions": [{
                "txId": globals.txId1,
                "payoffs": [{
                    "betId": globals.betId,
                    "amount": globals.payoff,
                    "jackpotPayoffDetails": null
                }]
            },
            {
                "txId": globals.txId2,
                "payoffs": [{
                        "betId": globals.betId2,
                        "amount": globals.payoff1,
                        "jackpotPayoffDetails": null
                    },
                    {
                        "betId": globals.betId3,
                        "amount": globals.payoff2,
                        "jackpotPayoffDetails": null
                    }
                ]
            }
        ]
    }
};