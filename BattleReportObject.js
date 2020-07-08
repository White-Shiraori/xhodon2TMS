// input Content Element
// return battleReportObject
function getBattleReportFromContent(messagecontainer, isSimulation) {

    // simulation mode
    battleReportObject.isSimulation = isSimulation;

    // the messagecontent consists of 3 elements
    // message-top, message and message-bottom
    setBattleTime(messagecontainer);
    //console.log(battleReportObject.time);   

    // iterate through the elements of the message
    let container = messagecontainer.getElementsByClassName("container")[0].childNodes;
    console.log(container);
       
    setMessageElements(container);

    // return the now filled object
    return battleReportObject;
};
    
// This describes a battle report in Xhodon2.
let battleReportObject = {
    isSimulation: false,
    time: "Fri,  3. Jul 20 xx:xx:xx",
    subject: {
        free: "PWNZ OMG LOL",
        original: "You attacked at xx:xx:xx",
    },
    isReceiverWinning: true,
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
function setBattleTime(messagecontainer) {

    if(battleReportObject.isSimulation) {
        let time = new Date();
        let day = time.getDay();
        let daystring = "Sun";
        switch (day) {
            case 1:
                daystring = "Mon"
                break;
            case 2:
                daystring = "Tue"
                break;
            case 3:
                daystring = "Wen"
                break;
            case 4:
                daystring = "Thu"
                break;
            case 5:
                daystring = "Fri"
                break;
            case 6:
                daystring = "Sat"
                break;
        
            default:
                break;
        }
        let month = time.getMonth();
        let monthstring = "Jan";
        switch (month) {
            case 1:
                monthstring = "Feb";
                break;
            case 2:
                monthstring = "Mar";
                break;
            case 3:
                monthstring = "Apr";
                break;
            case 4:
                monthstring = "May";
                break;
            case 5:
                monthstring = "Jun";
                break;
            case 6:
                monthstring = "Jul";
                break;
            case 7:
                monthstring = "Aug";
                break;
            case 8:
                monthstring = "Sep";
                break;
            case 9:
                monthstring = "Oct";
                break;
            case 10:
                monthstring = "Nov";
                break;
            case 11:
                monthstring = "Dec";
                break;
            default:
                break;
        }
        let year = time.getFullYear().toString().substr(2);
        battleReportObject.time = `${daystring}, ${time.getDate()}. ${monthstring} ${year} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        return;
    }

    // message-top only contains the time
    let mtop = messagecontainer.getElementsByClassName("message-top")[0];

    // hide the original
    mtop.style.display = "none";

    let mtoptext = mtop.children[0].children[0].innerHTML;
    battleReportObject.time = mtoptext.split(" am ")[1];
}