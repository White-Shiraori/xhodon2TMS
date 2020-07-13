// Participant in a Battle Report
let participant = {

    // player, sentinel or palace
    player: undefined,

    // stone matle and crystal tower
    defenseBuilding: undefined,

    // troops
    battle: undefined,

    isAttacker: false,
    isDefender: false,
    isAttackerTotal: false,
    isDefenderTotal: false,
    isSentinel: false,
    items: new Array(3),

    // fallen troops in our Shaman Hut percentage
    resurrectionRate: 0.00,

    // Ressources raided
    raided: undefined,

    // Results we calculated
    results: undefined,
};