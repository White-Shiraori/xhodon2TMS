// input Content Element
// return battleReportObject
function getBattleReportFromContent(messagecontainer, user, isSimulation) {

    // simulation mode
    battleReportObject.isSimulation = isSimulation;

    // the messagecontent consists of 3 elements
    // message-top, message and message-bottom
    setBattleTime(messagecontainer);
    //console.log(battleReportObject.time);   

    // iterate through the elements of the message
    let container = messagecontainer.getElementsByClassName("container")[0].childNodes;
       
    setMessageElements(container);

    // return the now filled object
    return battleReportObject;
};
    
// This describes a battle report in Xhodon2.
let battleReportObject = {
    isSimulation: false,
    banner: undefined,
    time: "Fri,  3. Jul 20 xx:xx:xx",
    subject: {
        free: "PWNZ OMG LOL",
        original: "You attacked at xx:xx:xx",
    },
    fightRounds: 0,
    receiver: {
        name: "",
        guild: "",
        isUser: false,
        isWinning: false,
        isAttacking: true,
        hasItems: false,
        hasRunes: false,
        ingredients: "",
    },
    participants: undefined,
};

// save the message line and hide
function setMessageElements(container) {

    let isAttacker = false;
    let isDefender = false;
    let isAttackerTotal = false;
    let isDefenderTotal = false;

    // reset participants
    battleReportObject.participants = undefined;

    // counter of participants
    let participantCounter = 0;

    // iterate through the elements of the message
    for (let msgline of Array.from(container)) {        

        // switch through the element tag
        switch (msgline.tagName) {
            case "H2":
                // this is the subject
                battleReportObject.subject.free = msgline.innerHTML;
                break;
            case "DIV":
                if ("victory" === msgline.className) {
                    battleReportObject.receiver.isWinning = true;
                    battleReportObject.banner = msgline;
                    battleReportObject.banner.style.paddingTop = 0;
                    battleReportObject.banner.style.height = auto;

                    let resultsprite = battleReportObject.banner.children[0];
                    resultsprite.style.marginBottom = 0;
                    let resulttext = battleReportObject.banner.children[1];
                    resulttext.innerHTML = "";
                }
                if ("loss" === msgline.className) {
                    battleReportObject.receiver.isWinning = false;
                    battleReportObject.banner = msgline;
                    battleReportObject.banner.style.paddingTop = 0;
                    battleReportObject.banner.style.height = auto;

                    let resultsprite = battleReportObject.banner.children[0];
                    resultsprite.style.marginBottom = 0;
                    let resulttext = battleReportObject.banner.children[1];
                    resulttext.innerHTML = "";
                }
                break;
            case "B":
                // Attacker
                if (msgline.textContent.indexOf("Attacker") > 0) {
                    isAttacker = true;
                    isDefender = false;
                    isAttackerTotal = false;
                    isDefenderTotal = false;
                }
                // Defender
                if (msgline.textContent.indexOf("Defender") > 0) {
                    isAttacker = false;
                    isDefender = true;
                    isAttackerTotal = false;
                    isDefenderTotal = false;
                }
                break;
            case "TABLE":
                // Unit Table or Ingrediants
                if ("kbTable designedTable" === msgline.className) {
                    if (isAttackerTotal) {
                        // this is the Attacker(Total)
                        Object.create(participant);
                        break;
                    }
                    if (isDefenderTotal) {
                        // this is the Defender(Total)
                        break;
                    }
                    if (isAttacker) {
                        // this is the Attacker
                        break;
                    }
                    if (isDefender) {
                        // this is the Defender
                        break;
                    }
                }
                // hero
                if (msgline.textContent.indexOf("Hero") > 0) {
                }
                // sentinel
                if (msgline.textContent.indexOf("Sentinel") > 0) {
                }
                break;
            case "STRONG":
                // Attacker(Total)
                if (msgline.textContent.indexOf("Attacker") > 0) {
                    participant.isAttacker = false;
                    participant.isDefender = false;
                    participant.isAttackerTotal = true;
                    participant.isDefenderTotal = false;
                }
                // Defender(Total)
                if (msgline.textContent.indexOf("Defender") > 0) {
                    participant.isAttacker = false;
                    participant.isDefender = false;
                    participant.isAttackerTotal = false;
                    participant.isDefenderTotal = true;
                }
                break;
            case "P":
                // Items
                if (msgline.textContent.indexOf("Item") > 0) {
                    battleReportObject.receiver.hasItems = true;
                }
                // Runes
                if (msgline.textContent.indexOf("Rune") > 0) {
                    battleReportObject.receiver.hasRunes = true;
                }
                break;
            case undefined:
                if (msgline.textContent.indexOf("attacked") > 0) {
                    battleReportObject.receiver.isAttacking = true;
                    battleReportObject.subject.original = msgline.textContent;
                }
                if (msgline.textContent.indexOf("defended") > 0) {
                    battleReportObject.receiver.isAttacking = false;
                    battleReportObject.subject.original = msgline.textContent;
                }
                if (msgline.textContent.indexOf("Rounds") > 0) {
                    battleReportObject.fightRounds = Number.parseInt(msgline.textContent.split(":")[1]);
                }
                break;
                
            default:
                break;
        }
   }
}
    
// participant in war
let participant = {
    name: "",
    hero: "",
    isAttacker: false,
    isDefender: false,
    isAttackerTotal: false,
    isDefenderTotal: false,
    isSentinel: false,
};

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