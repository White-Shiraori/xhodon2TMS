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

    if ((battleReport.receiver.isAttacking && battleReport.receiver.isWinning) 
        || (!battleReport.receiver.isAttacking && !battleReport.receiver.isWinning)) {
        header_attacker.innerHTML = GM_getValue("x2attackerwon-"+GM_getValue("x2language"));
        header_attacker.className = "winner";

        header_defender.innerHTML = GM_getValue("x2defenderlost-"+GM_getValue("x2language"));
        header_defender.className = "loser";
    } else {
        header_attacker.innerHTML = GM_getValue("x2attackerlost-"+GM_getValue("x2language"));
        header_attacker.className = "loser";

        header_defender.innerHTML = GM_getValue("x2defenderwon-"+GM_getValue("x2language"));
        header_defender.className = "winner";
    }
    
    let trooppoints = tbl.insertRow(1);

    let attacker_tp_name = trooppoints.insertCell(0);
    attacker_tp_name.innerHTML = GM_getValue("x2trooppoints-"+GM_getValue("x2language"));
    let attacker_tp_value = trooppoints.insertCell(1);
    attacker_tp_value.innerHTML = abbreviateNumber(battleReport.result.attacker.troops); // ToDo: Einfärben

    let trooppoints_name_loser = trooppoints.insertCell(2);
    trooppoints_name_loser.innerHTML = GM_getValue("x2trooppoints-"+GM_getValue("x2language"));
    let trooppoints_value_loser = trooppoints.insertCell(3);
    trooppoints_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.troops); // ToDo: Einfärben

    let attack = tbl.insertRow(2);

    let attack_name_winner = attack.insertCell(0);
    attack_name_winner.innerHTML = GM_getValue("x2attack-"+GM_getValue("x2language"));
    let attack_value_winner = attack.insertCell(1);
    attack_value_winner.innerHTML = abbreviateNumber(battleReport.result.attacker.attack); // ToDo: Einfärben

    let attack_name_loser = attack.insertCell(2);
    attack_name_loser.innerHTML = GM_getValue("x2attack-"+GM_getValue("x2language"));
    let attack_value_loser = attack.insertCell(3);
    attack_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.attack); // ToDo: Einfärben

    let defense = tbl.insertRow(3);

    let defense_name_winner = defense.insertCell(0);
    defense_name_winner.innerHTML = GM_getValue("x2defense-"+GM_getValue("x2language"));
    let defense_value_winner = defense.insertCell(1);
    defense_value_winner.innerHTML = abbreviateNumber(battleReport.result.attacker.defense); // ToDo: Einfärben

    let defense_name_loser = defense.insertCell(2);
    defense_name_loser.innerHTML = GM_getValue("x2defense-"+GM_getValue("x2language"));
    let defense_value_loser = defense.insertCell(3);
    defense_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.defense); // ToDo: Einfärben

    let life = tbl.insertRow(4);

    let life_name_winner = life.insertCell(0);
    life_name_winner.innerHTML = GM_getValue("x2life-"+GM_getValue("x2language"));
    let life_value_winner = life.insertCell(1);
    life_value_winner.innerHTML = abbreviateNumber(battleReport.result.attacker.life); // ToDo: Einfärben

    let life_name_loser = life.insertCell(2);
    life_name_loser.innerHTML = GM_getValue("x2life-"+GM_getValue("x2language"));
    let life_value_loser = life.insertCell(3);
    life_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.life); // ToDo: Einfärben    

    let mana = tbl.insertRow(5);

    let mana_name_winner = mana.insertCell(0);
    mana_name_winner.innerHTML = GM_getValue("x2mana-"+GM_getValue("x2language"));
    let mana_value_winner = mana.insertCell(1);
    mana_value_winner.innerHTML = abbreviateNumber(battleReport.result.attacker.mana); // ToDo: Einfärben

    let mana_name_loser = mana.insertCell(2);
    mana_name_loser.innerHTML = GM_getValue("x2mana-"+GM_getValue("x2language"));
    let mana_value_loser = mana.insertCell(3);
    mana_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.mana); // ToDo: Einfärben    

    let exp = tbl.insertRow(6);

    let exp_name_winner = exp.insertCell(0);
    exp_name_winner.innerHTML = GM_getValue("x2experience-"+GM_getValue("x2language"));
    let exp_value_winner = exp.insertCell(1);
    exp_value_winner.innerHTML = abbreviateNumber(battleReport.result.attacker.hero); // ToDo: Einfärben

    let exp_name_loser = exp.insertCell(2);
    exp_name_loser.innerHTML = GM_getValue("x2experience-"+GM_getValue("x2language"));
    let exp_value_loser = exp.insertCell(3);
    exp_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.hero); // ToDo: Einfärben    

    let iexp = tbl.insertRow(7);

    let iexp_name_winner = iexp.insertCell(0);
    iexp_name_winner.innerHTML = GM_getValue("x2investedxp-"+GM_getValue("x2language"));
    let iexp_value_winner = iexp.insertCell(1);
    iexp_value_winner.innerHTML = 0; // ToDo: Einfärben   

    let iexp_name_loser = iexp.insertCell(2);
    iexp_name_loser.innerHTML = GM_getValue("x2investedxp-"+GM_getValue("x2language"));
    let iexp_value_loser = iexp.insertCell(3);
    iexp_value_loser.innerHTML = 0; // ToDo: Einfärben   

    let stone = tbl.insertRow(8);

    let stone_name_winner = stone.insertCell(0);
    stone_name_winner.innerHTML = GM_getValue("x2stonecosts-"+GM_getValue("x2language"));
    let stone_value_winner = stone.insertCell(1);
    stone_value_winner.innerHTML = abbreviateNumber(battleReport.result.attacker.stones); // ToDo: Einfärben

    let stone_name_loser = stone.insertCell(2);
    stone_name_loser.innerHTML = GM_getValue("x2stonecosts-"+GM_getValue("x2language"));
    let stone_value_loser = stone.insertCell(3);
    stone_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.stones); // ToDo: Einfärben    

    let mushrooms = tbl.insertRow(9);

    let mushrooms_name_winner = mushrooms.insertCell(0);
    mushrooms_name_winner.innerHTML = GM_getValue("x2mushroomcosts-"+GM_getValue("x2language"));
    let mushrooms_value_winner = mushrooms.insertCell(1);
    mushrooms_value_winner.innerHTML = abbreviateNumber(battleReport.result.attacker.mushrooms); // ToDo: Einfärben

    let mushrooms_name_loser = mushrooms.insertCell(2);
    mushrooms_name_loser.innerHTML = GM_getValue("x2mushroomcosts-"+GM_getValue("x2language"));
    let mushrooms_value_loser = mushrooms.insertCell(3);
    mushrooms_value_loser.innerHTML = abbreviateNumber(battleReport.result.defender.mushrooms); // ToDo: Einfärben    
  
    return tbl;
};

function createCompleteBattle(battleReport, container) {
    let btn = document.createElement("button");
    let bCollapsed = true;
    btn.innerHTML = GM_getValue("x2detailedreport-"+GM_getValue("x2language")) + ' <img src="/game/gfx/icons/up.1544611332.png" class="collapsarrow" onmouseout="nd();" onmouseover="return overlib(\'Aufklappen\');"></img>';
    btn.className = "collapsible";
    btn.onclick = () => {
        collapse(container);
        if (bCollapsed) {
            bCollapsed = false;
            btn.innerHTML = GM_getValue("x2detailedreport-"+GM_getValue("x2language")) + ' <img src="/game/gfx/icons/down.1548962918.png" class="collapsarrow" onmouseout="nd();" onmouseover="return overlib(\'Zuklappen\');"></img>';
        } else {
            bCollapsed = true;
            btn.innerHTML = GM_getValue("x2detailedreport-"+GM_getValue("x2language")) + ' <img src="/game/gfx/icons/up.1544611332.png" class="collapsarrow" onmouseout="nd();" onmouseover="return overlib(\'Aufklappen\');"></img>';
        }
    }
    return btn;
}

function createRewards(battleReport) {

    let rewardtbl = document.createElement("table");
    let rewardrow = rewardtbl.insertRow(0);
    let rewardheader = rewardrow.insertCell(0);
    rewardheader.colSpan = 4;
    rewardheader.style.textAlign = "left";
    rewardheader.style.fontSize = "30px";
    rewardheader.innerHTML = GM_getValue("x2rewards-"+GM_getValue("x2language"));
    
    let rewards = rewardtbl.insertRow(1);
    let bountycell = rewards.insertCell(0);

    let goldimg = "<img height=\"30\" alt=\"Gold Resin\" title=\"Gold Resin\" src=\"/game/gfx//icons/goldharz.png\">";
    let stoneimg = "<img height=\"30\" alt=\"Power Stones\" title=\"Power Stones\" src=\"/game/gfx//icons/kraftstein.png\">";
    let crystalimg = "<br><img height=\"30\" alt=\"Crystal Splinters\" title=\"Crystal Splinters\" src=\"/game/gfx//icons/kristall.png\">";
    let herbimg = "<img height=\"30\" alt=\"Herb Essences\" title=\"Herb Essences\" src=\"/game/gfx//icons/essenz.png\">";

    bountycell.innerHTML = goldimg + abbreviateNumber(battleReport.result.bounty.gold) 
                            + stoneimg + abbreviateNumber(battleReport.result.bounty.stone) 
                            + crystalimg + abbreviateNumber(battleReport.result.bounty.crystal)
                            + herbimg + abbreviateNumber(battleReport.result.bounty.herb);
    bountycell.style.fontSize = "30px";

    // Runes
    let rewardRunes = rewards.insertCell(1);
    if (battleReport.receiver.hasRunes) {
        rewardRunes.innerHTML = "1<img class=\"icon20px runes\" title=\"\" alt=\"Runes\" src=\"/game/gfx/icons/runes.1544611332.png\">";
    } else {
        rewardRunes.innerHTML = "0<img class=\"icon20px runes\" title=\"\" alt=\"Runes\" src=\"/game/gfx/icons/runes.1544611332.png\">";
    }

    // Ingredients
    let rewardIngredients = rewards.insertCell(2);
    if (battleReport.receiver.ingredients != undefined) {
        Array.from(battleReport.receiver.ingredients.children).forEach(element => {
            rewardIngredients.append(element);
        });
    }

    // Items
    let rewardItems = rewards.insertCell(3);
    if (battleReport.receiver.hasItems) {
        for(let parti of battleReport.participants) {
            if (parti.isReceiver) {
                if (parti.items[0] != undefined){
                    rewardItems.append(parti.items[0]);
                }
                if (parti.items[1] != undefined){
                    rewardItems.append(parti.items[1]);
                }
                if (parti.items[2] != undefined){
                    rewardItems.append(parti.items[2]);
                }
            }
        }
    }

    return rewardtbl;
}
