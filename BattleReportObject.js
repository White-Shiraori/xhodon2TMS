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
    let container = messagecontainer.getElementsByClassName("container")[0].children;
    console.log(container);
    

    // old for loop b/c children is array like and Array.from didnt work
    for (let index = 0; index < container.length; index++) {
        const element = container[index];
        element.style.display = "none";
        
        
    }

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