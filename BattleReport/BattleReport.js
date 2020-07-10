// Show the new Battle Report
// Sina, have fun :D
function showNewBattleReport(battleReport, user) {

    // our own div with the battle report
    let maindiv = document.createElement("div");
    
    // same className as original to get same CSS
    // only change if you replace complete CSS
    maindiv.className = "container"; 

    // banner
    maindiv.append(battleReport.banner);
    maindiv.append(document.createElement("br"));
    maindiv.append(document.createElement("br"));
    
    // Summary Table
    let summary = createSummaryTable(battleReport);
    maindiv.append(summary);
    
    // Bounty

    // Runes, Items, Ingredients

    // return the element
    return maindiv;
}


// This will change the Battle Report
// Please do NOT make changes here!
function changeBattleReport(content, user) {
    // first we genereate an object from the message 
    // and hide the original content.
    let event = content.getElementsByClassName("event")[0];
    let battle = document.getElementById("messagecontainer");
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
    let maindiv = showNewBattleReport(battleReport, user);
    message.append(maindiv);
};