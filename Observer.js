// This is the observer for all our changes to the Xhodon2-UI.

/* globals unitValues changeBattleReport*/

// Select the node that will be observed for mutations
// The content element is used for all popups in Xhodon2
let targetNode = document.getElementById('content');

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {

    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if (targetNode.getElementsByClassName("kbTable designedTable")[0] != undefined) {

                // User of the script
                let menueUser = document.getElementById("menu-user");
                GM_setValue("x2userName", menueUser.getElementsByClassName("userlink_name")[0].textContent);
                GM_setValue("x2userGuild", menueUser.getElementsByClassName("userlink_tag")[0].textContent);
                setUserLanguage();
                changeBattleReport(targetNode);
                break;
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

function addObserverIfDesiredNodeAvailable() {
    let tutorial = document.getElementById('sideBoxContainer');
    if(!tutorial) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
    tutorialDone = true;    
    let tutorialoverlay = document.getElementById('sideBoxContainer');
    tutorialoverlay.style.display = "none";
    let targetNode = document.getElementById('content');
    if(!targetNode) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }

    // Options for the observer (which mutations to observe)
    const config = {childList: true};

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
}
addObserverIfDesiredNodeAvailable();
