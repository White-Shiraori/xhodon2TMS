// this class only contains functions for the general use
// please make it independantly to any specific use

function collapse(ele) {
    if (ele.style.display === "block") {
        ele.style.display = "none";
    } else {
        ele.style.display = "block";
    }
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

function getUnitFromName(name) {
    return unitValues.filter(element => {
        return element.name.filter(element => {
            return element === name;
        }).length > 0;
    });

}

function addThousandsSep(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function abbreviateNumber(number) {
    if (number < 1e3) return number; 
    if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + " k"; 
    if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + " m"; 
    if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + " b"; 
    if (number >= 1e12) return +(number / 1e12).toFixed(1) + " t";     
}