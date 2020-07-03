// input Content Element
// return battleReportObject
function getBattleReportFromContent(messagecontainer) {

    // the messagecontent consists of 3 elements
    // message-top, message and message-bottom
    battleReportObject.time = getBattleTime(messagecontainer);
    //console.log(battleReportObject.time);    

    // iterate through the elements of the message
    let container = messagecontainer.getElementsByClassName("container")[0].children;   
    setMessageElements(container);

    // return the now filled object
    return battleReportObject;
};
    
// This describes a battle report in Xhodon2.
let battleReportObject = {
    time: "Fri,  3. Jul 20 xx:xx:xx",
    subject: "You attacked at xx:xx:xx",
};

// save the message line and hide
function setMessageElements(container) {

    // temporary variable
    let isAttacking = undefined;
    let isReceiverWinning = false;

    // iterate through the elements of the message
    for (let msgline of Array.from(container)) {

        // hide the original element
        msgline.style.display = "none";

        // switch through the element tag
        switch (msgline.tagName) {
            case "H2":
                // this is the subject
                battleReportObject.subject = msgline.innerHTML;
                break;
            case "DIV":
                if ("victory" === msgline.className) {
                    isReceiverWinning = true;
                }
                break;
            case "B":
                // text such as Attacker/Defender
                break;
            case "TABLE":
                // Unit Table or Ingrediants
                if ("kbTable designedTable" === msgline.className) {

                }
                break;
            default:
                break;
        }
   }
}

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