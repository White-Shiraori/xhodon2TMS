// This will change the Battle Report
function changeBattleReport(content) {
    // first we genereate an object from the message 
    // and hide the original content.
    let event = content.getElementsByClassName("event")[0];
    let battle = content.getElementsByClassName("messagecontainer")[0];
    let battleReport;
    if (event === undefined) {
        // battle report
        battleReport = getBattleReportFromContent(battle, false);
    } else {
        // simulation mode
        battleReport = getBattleReportFromContent(event, true);
    }

    // Now lets show whats really important
};