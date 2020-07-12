// Calculating the BattleReport for new Results
let result = {
    troops: 0,
    hero: 0,
    attack: 0,
    defense: 0,
    life: 0,
    mana: 0,
    mushrooms: 0,
};


function getResultFromBattleReport(battleReport) {

    // for all participants
    battleReport.participant.array.forEach(element => {
        element.result = getResultFromParticipant(element);
        battleReport.results = addResult(battleReport.results, element.result);
    });
}

function addResult(bresult, presult) {
    if (bresult === undefined) {
        bresult = Object.create(result);
    }
    if (presult === undefined) {
        presult = Object.create(result);
    }
    let retresult = Object.create(result);
    retresult.troops = bresult.troops + presult.troops;
    retresult.hero = bresult.hero + presult.hero;
    retresult.attack = bresult.attack + presult.attack;
    retresult.defense = bresult.defense + presult.defense;
    retresult.life = bresult.life + presult.life;
    retresult.mana = bresult.mana + presult.mana;
    retresult.mushrooms = bresult.mushrooms + presult.mushrooms;
    return retresult;
}
