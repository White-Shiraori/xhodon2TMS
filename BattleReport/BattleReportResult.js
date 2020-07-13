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

    // for all participants
    for (let parti of battleReport.participants){
        if (parti.result === undefined) {
            parti.result = Object.create(result);
        }

        //total battle and sentinal are excluded for now
        if (parti.isAttackerTotal || parti.isDefenderTotal || parti.isSentinel) {
            continue;
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
            let revivallost = (parseFloat(revival_percent)/100.0) - 1.0;
            

            // Total
            if (unit.sentinel) {
                parti.result.troops += (conversion - troopslost)*troopsppoints;
                parti.result.attack += (conversion - troopslost)*baseattack;
                parti.result.defense += (conversion - troopslost)*basedefense;
                parti.result.life += (conversion - troopslost)*baselife;
            } else {
                parti.result.troop_points += (Math.floor(troopslost*revivallost) + conversion)*trooppoints;
                parti.result.attack += (Math.floor(troopslost*revivallost) + conversion)*baseattack;
                parti.result.defense += (Math.floor(troopslost*revivallost) + conversion)*basedefense;
                parti.result.life += (Math.floor(troopslost*revivallost) + conversion)*baselife;
            }
        }
        if (parti.isAttacker) {
            battleReport.result.attacker = addResult(battleReport.result, parti.result);
        } else {
            battleReport.result.defender = addResult(battleReport.result, parti.result);
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
