var Query = "Query: ";
var addAnd = false;
var count = 0;
function buildFirst() {
    if (count == 0) {
        Query = Query + "Sweet "
        document.getElementById("result").innerHTML = Query;
        document.getElementById("first").innerHTML = "Hot";
        document.getElementById("second").innerHTML = "Cold";
    }
    if (count == 1) {
        Query = Query + "Cold ";
        document.getElementById("result").innerHTML = Query;
        document.getElementById("second").innerHTML = "Fast";
        document.getElementById("first").innerHTML = "Dine-in";
    }
    if (count == 2) {
        Query = Query + "Dine-in ";
        document.getElementById("result").innerHTML = Query;
        document.getElementById("left").innerHTML = "";
        document.getElementById("right").innerHTML = "";
    }
    count++;
    //addAnd = true;
}
function buildSecond() {
    if (count == 0) {
        Query = Query + "Spicy ";
        document.getElementById("result").innerHTML = Query;
        document.getElementById("second").innerHTML = "Cold";
        document.getElementById("first").innerHTML = "Hot";
    }
    if (count == 1) {
        Query = Query + "Cold ";
        document.getElementById("result").innerHTML = Query;
        document.getElementById("second").innerHTML = "Fast";
        document.getElementById("first").innerHTML = "Dine-in";
    }
    if (count == 2) {
        Query = Query + "Fast ";
        document.getElementById("result").innerHTML = Query;
        document.getElementById("left").innerHTML = "";
        document.getElementById("right").innerHTML = "";
    }
    count++;
}

