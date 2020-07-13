function addThousandsSep(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function collapse(ele) {
    if (ele.style.display === "block") {
        ele.style.display = "none";
    } else {
        ele.style.display = "block";
    }
}