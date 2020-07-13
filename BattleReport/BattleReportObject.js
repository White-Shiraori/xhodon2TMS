// input messagecontainer Element
// return battleReport
function getBattleReportFromContent(messagecontainer, isSimulation) {

    // new BattleReport
    let battleReport = Object.create(battleReportObject);

    // simulation mode
    battleReport.isSimulation = isSimulation;

    // the messagecontent consists of 3 elements
    // message-top, message and message-bottom
    battleReport = setBattleTime(messagecontainer, battleReport);   

    // iterate through the elements of the message
    let container = messagecontainer.getElementsByClassName("container")[0].childNodes;
    
    // read all elements and fill the battle report
    battleReport = setMessageElements(container, battleReport);

    // calculate the results per participant
    battleReport = getResultFromBattleReport(battleReport);

    // return the now filled object
    return battleReport;
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
    result: {
        attacker: undefined,
        defender: undefined,
    },
};

// save the message line and hide
function setMessageElements(container, battleReport) {
    if (battleReport === undefined) {
        battleReport = Object.create(battleReportObject);
    }

    let tempParticipant = undefined;
    let isAttacker = false;
    let isDefender = false;
    let isAttackerTotal = false;
    let isDefenderTotal = false;

    // reset participants
    battleReport.participants = new Array();

    // counter of participants
    let participantCounter = 0;

    // counter of items
    let itemCounter = 0;

    // iterate through the elements of the message
    for (let msgline of Array.from(container)) {        

        // switch through the element tag
        switch (msgline.tagName) {
            case "H2":
                // this is the subject
                battleReport.subject.free = msgline.innerHTML;
                break;
            case "DIV":
                if ("victory" === msgline.className) {
                    battleReport.receiver.isWinning = true;
                    battleReport.banner = msgline;
                    battleReport.banner.style.paddingTop = 0;
                    battleReport.banner.style.height = "auto";

                    let resultsprite = battleReport.banner.children[0];
                    resultsprite.style.marginBottom = 0;
                    let resulttext = battleReport.banner.children[1];
                    resulttext.innerHTML = "";
                }
                if ("loss" === msgline.className) {
                    battleReport.receiver.isWinning = false;
                    battleReport.banner = msgline;
                    battleReport.banner.style.paddingTop = 0;
                    battleReport.banner.style.height = "auto";

                    let resultsprite = battleReport.banner.children[0];
                    resultsprite.style.marginBottom = 0;
                    let resulttext = battleReport.banner.children[1];
                    resulttext.innerHTML = "";
                }
                break;
            case "B":                
                // Attacker
                if (msgline.textContent.indexOf("Attacker") >= 0) {
                    isAttacker = true;
                    isDefender = false;
                    isAttackerTotal = false;
                    isDefenderTotal = false;
                }
                // Defender
                if (msgline.textContent.indexOf("Defender") >= 0) {
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
                        let parti = Object.create(participant);
                        parti.isAttackerTotal = true;
                        parti.battle = msgline;
                        battleReport.participants[participantCounter] = parti;
                        participantCounter++;
                        break;
                    }
                    if (isDefenderTotal) {
                        // this is the Defender(Total)
                        let parti = Object.create(participant);
                        parti.isDefenderTotal = true;
                        parti.battle = msgline;
                        battleReport.participants[participantCounter] = parti;
                        participantCounter++;
                        break;
                    }
                    tempParticipant.battle = msgline;
                    break;                    
                }
                // Hero
                if (msgline.textContent.indexOf("Hero") >= 0) {
                    // new participant
                    if (tempParticipant != undefined) {
                        battleReport.participants[participantCounter] = tempParticipant;
                        participantCounter++;
                        itemCounter = 0;
                    }
                    tempParticipant = undefined;
                    tempParticipant = Object.create(participant);
                    tempParticipant.isAttacker = isAttacker;
                    tempParticipant.isDefender = isDefender;
                    tempParticipant.isSentinel = false;
                    tempParticipant.player = msgline;
                    break;
                }
                // Palace
                if (msgline.textContent.indexOf("Palace") >= 0) {
                    // new participant
                    if (tempParticipant != undefined) {
                        battleReport.participants[participantCounter] = tempParticipant;
                        participantCounter++;
                    }
                    tempParticipant = undefined;
                    tempParticipant = Object.create(participant);
                    tempParticipant.isAttacker = false;
                    tempParticipant.isDefender = true;
                    tempParticipant.isSentinel = false;
                    tempParticipant.player = msgline;
                    break;
                }
                // Sentinel
                if (msgline.textContent.indexOf("Sentinel") >= 0) {
                    // new participant
                    if (tempParticipant != undefined) {
                        battleReport.participants[participantCounter] = tempParticipant;
                        participantCounter++;
                    }
                    tempParticipant = undefined;
                    tempParticipant = Object.create(participant);
                    tempParticipant.isAttacker = isAttacker;
                    tempParticipant.isDefender = isDefender;
                    tempParticipant.isSentinel = true;
                    tempParticipant.player = msgline;
                    break;
                }
                // Ressurection
                if (msgline.textContent.indexOf("Resurrect") > 0) {
                    let cellsTemp = msgline.rows[0].cells;
                    if (cellsTemp[1] === undefined) {
                        // hero has no skill
                        tempParticipant.resurrectionRate = parseFloat(cellsTemp[0].textContent.split("%")[0].split(" ").last());
                    } else {
                        // hero has skill
                        tempParticipant.resurrectionRate = parseFloat(cellsTemp[1].childNodes[1].textContent);
                    }
                    break;
                }
                // Ressources raided
                if (msgline.textContent.indexOf("Raided") >= 0) {
                    tempParticipant.raided = msgline;
                    break;
                }
                // Stone Mantle and Crystal Tower
                if (msgline.textContent.indexOf("Stone Mantle") >= 0 || msgline.textContent.indexOf("Crystal Tower") >= 0) {
                    tempParticipant.defenseBuilding = msgline;
                    break;
                }
                break;
            case "STRONG":
                // Attacker(Total)
                if (msgline.textContent.indexOf("Attacker") >= 0) {
                    isAttacker = false;
                    isDefender = false;
                    isAttackerTotal = true;
                    isDefenderTotal = false;
                }
                // Defender(Total)
                if (msgline.textContent.indexOf("Defender") >= 0) {
                    isAttacker = false;
                    isDefender = false;
                    isAttackerTotal = false;
                    isDefenderTotal = true;
                }
                break;
            case "P":
                // Items
                if (msgline.textContent.indexOf("Item") >= 0) {
                    battleReport.receiver.hasItems = true;
                }
                // Runes
                if (msgline.textContent.indexOf("Rune") >= 0) {
                    battleReport.receiver.hasRunes = true;
                }
                break;
            case undefined:
                if (msgline.textContent.indexOf("attacked") >= 0) {
                    battleReport.receiver.isAttacking = true;
                    battleReport.subject.original = msgline.textContent;
                }
                if (msgline.textContent.indexOf("defended") >= 0) {
                    battleReport.receiver.isAttacking = false;
                    battleReport.subject.original = msgline.textContent;
                }
                if (msgline.textContent.indexOf("Rounds") >= 0) {
                    battleReport.fightRounds = Number.parseInt(msgline.textContent.split(":")[1]);
                }
                break;
            case "IMG":
                // Items are only kept as images
                tempParticipant.items[itemCounter] = msgline;
                itemCounter++;
                break;
            default:
                break;
        }
    }
    // last participant
    if (tempParticipant != undefined) {
        battleReport.participants[participantCounter] = tempParticipant;
        participantCounter++;
    }
    return battleReport;
}

// retrieve the time from the header
// hides the original header
function setBattleTime(messagecontainer, battleReport) {

    if(battleReport.isSimulation) {
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
        battleReport.time = `${daystring}, ${time.getDate()}. ${monthstring} ${year} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        return battleReport;
    }

    // message-top only contains the time
    let mtop = messagecontainer.getElementsByClassName("message-top")[0];

    // hide the original
    mtop.style.display = "none";

    let mtoptext = mtop.children[0].children[0].innerHTML;
    battleReport.time = mtoptext.split(" am ")[1];
    return battleReport;
}