// Calculating the BattleReport for new Results
let result = {
    troops: 0,
    hero: 0,
    attack: 0,
    defense: 0,
    life: 0,
    mana: 0,
    stones: 0,
    mushrooms: 0,
};


function getResultFromBattleReport(battleReport) {

    battleReport.result.attacker = Object.create(result);
    battleReport.result.defender = Object.create(result);
    battleReport.result.gold = 0;
    battleReport.result.stone = 0;
    battleReport.result.crystal = 0;
    battleReport.result.herb = 0;

    // for all participants
    for (let parti of battleReport.participants){

        parti.result = Object.create(result);

        //total battle and sentinal are excluded for now
        if (parti.isAttackerTotal || parti.isDefenderTotal || parti.isSentinel) {
            continue;
        }

        // empty hero or spy
        if (parti.battle === undefined) {
            continue;
        }

        // add bounty
        if (battleReport.receiver.isWinning) {
            // Ressources gained
            if ((battleReport.receiver.isAttacking && parti.isAttacker) 
            || (!battleReport.receiver.isAttacking && !parti.isAttacker)) {
                battleReport.result.bounty.header = "Ressources gained: ";
                if(parti.raided != undefined) {
                    let raids = parti.raided.rows[0].cells[0].childNodes;
                    battleReport.result.bounty.gold += parseInt(raids[3].textContent.replace(/[,.]/g,""));
                    battleReport.result.bounty.stone += parseInt(raids[5].textContent.replace(/[,.]/g,""));
                    battleReport.result.bounty.crystal += parseInt(raids[7].textContent.replace(/[,.]/g,""));
                    battleReport.result.bounty.herb += parseInt(raids[9].textContent.replace(/[,.]/g,""));
                }
            }
        } else {
            // Ressources stolen
            if ((battleReport.receiver.isAttacking && !parti.isAttacker) 
            || (!battleReport.receiver.isAttacking && parti.isAttacker)) {
                battleReport.result.bounty.header = "Ressources stolen: ";
                if(parti.raided != undefined) {
                    let raids = parti.raided.rows[0].cells[0].childNodes;
                    battleReport.result.bounty.gold += parseInt(raids[3].textContent.replace(/[,.]/g,""));
                    battleReport.result.bounty.stone += parseInt(raids[5].textContent.replace(/[,.]/g,""));
                    battleReport.result.bounty.crystal += parseInt(raids[7].textContent.replace(/[,.]/g,""));
                    battleReport.result.bounty.herb += parseInt(raids[9].textContent.replace(/[,.]/g,""));
                }
            }
        }

        //loop through battle report
        let unitTable = parti.battle.rows;
        let header = true;
        for (let unitRows of unitTable) {
            if (header) {
                header = false;
                continue;
            };

            // Unit
            let unit = getUnitFromName(unitRows.cells[1].textContent)[0];
            let trooppoints = parseFloat(unit.points);

            // Base Attack
            let baseattack = parseFloat(unit.attack);

            // Base Defense
            let basedefense = parseFloat(unit.defense);

            // Base Life
            let baselife = parseFloat(unit.life);

            // Converted
            let conversioncol = unitRows.cells[3].getElementsByClassName("success")[0];
            let conversion = 0;
            if (conversioncol != undefined) {
                conversion = parseInt(conversioncol.textContent.replace(/[,.]/g,""));
            }
            
            // LOST
            let troopslost = parseFloat(unitRows.cells[4].textContent.replace(/[,.]/g,""));
            let revivallost = (parseFloat(parti.resurrectionRate)/100.0) - 1.0;            

            // Total
            if (unit.sentinel) {
                parti.result.troops += (conversion - troopslost)*trooppoints;
                parti.result.attack += (conversion - troopslost)*baseattack;
                parti.result.defense += (conversion - troopslost)*basedefense;
                parti.result.life += (conversion - troopslost)*baselife;
            } else {
                parti.result.troops += (Math.floor(troopslost*revivallost) + conversion)*trooppoints;
                parti.result.attack += (Math.floor(troopslost*revivallost) + conversion)*baseattack;
                parti.result.defense += (Math.floor(troopslost*revivallost) + conversion)*basedefense;
                parti.result.life += (Math.floor(troopslost*revivallost) + conversion)*baselife;
            }
        }
        if (parti.isAttacker) {
            battleReport.result.attacker = addResult(battleReport.result.attacker, parti.result);
        } else {
            battleReport.result.defender = addResult(battleReport.result.defender, parti.result);
        }
    }
    return battleReport;
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
    retresult.stones = bresult.stones + presult.stones;
    retresult.mushrooms = bresult.mushrooms + presult.mushrooms;
    return retresult;
}
