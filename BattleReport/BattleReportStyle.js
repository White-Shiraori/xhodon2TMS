// Sina have fun with this
function createSummaryTable(battleReport){
    let tbl = document.createElement("table");
    tbl.style.width = '100%';
    tbl.style.fontWeight = "bold";
    tbl.style.backgroundColor = 'rgb(25, 5, 5, 0.7)';

    let header = tbl.insertRow(0);
    let header_attacker = header.insertCell(0);
    header_attacker.colSpan = "2";
    let header_defender = header.insertCell(1);
    header_defender.colSpan = "2";

    if (battleReport.isReceiverWinning) {
        header_attacker.innerHTML = "Angreifer hat gewonnen";
        header_attacker.className = "winner";

        header_defender.innerHTML = "Verteidiger hat verloren";
        header_defender.className = "loser";
    } else {
        header_attacker.innerHTML = "Angreifer hat verloren";
        header_attacker.className = "loser";

        header_defender.innerHTML = "Verteidiger hat gewonnen";
        header_defender.className = "winner";
    }
    
    let trooppoints = tbl.insertRow(1);

    let attacker_tp_name = trooppoints.insertCell(0);
    attacker_tp_name.innerHTML = "Truppenpunkte";
    let attacker_tp_value = trooppoints.insertCell(1);
    attacker_tp_value.innerHTML = addThousandsSep(battleReport.result.attacker.troops); // ToDo: Einfärben

    let trooppoints_name_loser = trooppoints.insertCell(2);
    trooppoints_name_loser.innerHTML = "Truppenpunkte";
    let trooppoints_value_loser = trooppoints.insertCell(3);
    trooppoints_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.troops); // ToDo: Einfärben

    let attack = tbl.insertRow(2);

    let attack_name_winner = attack.insertCell(0);
    attack_name_winner.innerHTML = "Angriff";
    let attack_value_winner = attack.insertCell(1);
    attack_value_winner.innerHTML = addThousandsSep(battleReport.result.attacker.attack); // ToDo: Einfärben

    let attack_name_loser = attack.insertCell(2);
    attack_name_loser.innerHTML = "Angriff";
    let attack_value_loser = attack.insertCell(3);
    attack_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.attack); // ToDo: Einfärben

    let defense = tbl.insertRow(3);

    let defense_name_winner = defense.insertCell(0);
    defense_name_winner.innerHTML = "Verteidigung";
    let defense_value_winner = defense.insertCell(1);
    defense_value_winner.innerHTML = addThousandsSep(battleReport.result.attacker.defense); // ToDo: Einfärben

    let defense_name_loser = defense.insertCell(2);
    defense_name_loser.innerHTML = "Verteidigung";
    let defense_value_loser = defense.insertCell(3);
    defense_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.defense); // ToDo: Einfärben

    let life = tbl.insertRow(4);

    let life_name_winner = life.insertCell(0);
    life_name_winner.innerHTML = "Leben";
    let life_value_winner = life.insertCell(1);
    life_value_winner.innerHTML = addThousandsSep(battleReport.result.attacker.life); // ToDo: Einfärben

    let life_name_loser = life.insertCell(2);
    life_name_loser.innerHTML = "Leben";
    let life_value_loser = life.insertCell(3);
    life_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.life); // ToDo: Einfärben    

    let mana = tbl.insertRow(5);

    let mana_name_winner = mana.insertCell(0);
    mana_name_winner.innerHTML = "Mana";
    let mana_value_winner = mana.insertCell(1);
    mana_value_winner.innerHTML = addThousandsSep(battleReport.result.attacker.mana); // ToDo: Einfärben

    let mana_name_loser = mana.insertCell(2);
    mana_name_loser.innerHTML = "Mana";
    let mana_value_loser = mana.insertCell(3);
    mana_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.mana); // ToDo: Einfärben    

    let exp = tbl.insertRow(6);

    let exp_name_winner = exp.insertCell(0);
    exp_name_winner.innerHTML = "Erfahrung";
    let exp_value_winner = exp.insertCell(1);
    exp_value_winner.innerHTML = addThousandsSep(battleReport.result.attacker.hero); // ToDo: Einfärben

    let exp_name_loser = exp.insertCell(2);
    exp_name_loser.innerHTML = "Erfahrung";
    let exp_value_loser = exp.insertCell(3);
    exp_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.hero); // ToDo: Einfärben    

    let stone = tbl.insertRow(7);

    let stone_name_winner = stone.insertCell(0);
    stone_name_winner.innerHTML = "Steinkosten";
    let stone_value_winner = stone.insertCell(1);
    stone_value_winner.innerHTML = addThousandsSep(battleReport.result.attacker.stones); // ToDo: Einfärben

    let stone_name_loser = stone.insertCell(2);
    stone_name_loser.innerHTML = "Steinkosten";
    let stone_value_loser = stone.insertCell(3);
    stone_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.stones); // ToDo: Einfärben    

    let mushrooms = tbl.insertRow(8);

    let mushrooms_name_winner = mushrooms.insertCell(0);
    mushrooms_name_winner.innerHTML = "Pilzkosten";
    let mushrooms_value_winner = mushrooms.insertCell(1);
    mushrooms_value_winner.innerHTML = addThousandsSep(battleReport.result.attacker.mushrooms); // ToDo: Einfärben

    let mushrooms_name_loser = mushrooms.insertCell(2);
    mushrooms_name_loser.innerHTML = "Pilzkosten";
    let mushrooms_value_loser = mushrooms.insertCell(3);
    mushrooms_value_loser.innerHTML = addThousandsSep(battleReport.result.defender.mushrooms); // ToDo: Einfärben    
  
    return tbl;
};