// Show the new Battle Report
// all styles and elements are to be created by BattleReportStyle.js
function showNewBattleReport(battleReport, container) {

    // log the battel report
    console.log(battleReport);

    // our own div with the battle report
    let maindiv = document.createElement("div");
    
    // same className as original to get same CSS
    // only change if you replace complete CSS
    maindiv.className = "container"; 
    // full widht 
    maindiv.style.width = "600px";

    // banner
    maindiv.append(battleReport.banner);
    maindiv.append(document.createElement("br"));
    maindiv.append(document.createElement("br"));

    // Bounty, Runes, Items, Ingredients
    let rewards = createRewards(battleReport);
    maindiv.append(rewards);
    maindiv.append(document.createElement("br"));
    maindiv.append(document.createElement("br"));
    
    // Summary Table
    let summary = createSummaryTable(battleReport);
    maindiv.append(summary);
    maindiv.append(document.createElement("br"));
    maindiv.append(document.createElement("br"));

    // complete Battle Report
    let completeBattle = createCompleteBattle(battleReport, container);
    maindiv.append(completeBattle);
    maindiv.append(document.createElement("br"));
    maindiv.append(document.createElement("br"));

    // return the element
    return maindiv;
}


// This will change the Battle Report
// Please do NOT make changes here!
function changeBattleReport(content) {
    // first we genereate an object from the message 
    // and hide the original content.
    let event = content.getElementsByClassName("event")[0];
    let battle = document.getElementById("messagecontainer");

    // set battle report language from the banner
    setBattleLanguage(battle.getElementsByClassName("result sprite-heroes-shadowPoints")[0].textContent.toUpperCase());

    let battleReport;
    if (event === undefined) {
        // battle report
        battleReport = getBattleReportFromContent(battle, false);
    } else {
        // simulation mode
        // TODO impl
        // battleReport = getBattleReportFromContent(event, user, true);
        return;
    }

    // hide old battle report
    let container = battle.getElementsByClassName("container")[0];
    container.style.display = "none";

    // Now lets show whats really important
    let message = battle.getElementsByClassName("message")[0];
    // padding to get more space
    message.style.padding = "15px 23px";
    let maindiv = showNewBattleReport(battleReport, container);
    message.insertBefore(maindiv, container);
};
