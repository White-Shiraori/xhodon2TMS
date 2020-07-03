// input Content Element
// return battleReportObject
function getBattleReportFromContent(messagecontainer) {
    
    // This describes a battle report in Xhodon2.
    let battleReportObject = {
        time: "",
    };

    // the messagecontent consists of 3 elements
    // message-top, message and message-bottom
    battleReportObject.time = getBattleTime(messagecontainer);
    console.log(battleReportObject.time);    

    // iterate through the elements of the message

};

// retrieve the time from the header
// hides the original header
function getBattleTime(messagecontainer) {
    // message-top only contains the time
    let mtop = messagecontainer.getElementsByClassName("message-top")[0];

    // hide the original
    mtop.style.display = "none";

    let mtoptext = mtop.children[0].children[0].innerHTML;
    return mtoptext.split(" am ")[1];
}