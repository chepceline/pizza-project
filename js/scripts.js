function getSizeCost(){
    var selectedSize= document.getElementById("size").value;
    return parseInt(selectedSize);
}
function getCrustCost(){
    var selectedCrust= document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber(){
    var selectedNumber= document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
}
function mushrooms(){
    var mushroom = 0;
    var addMushroom = document.getElementById("toppingone");
    if(addMushroom.checked == true);{
        mushroom = 150
    } return parseInt (mushroom);

}
function sausage(){
    var sausage = 0;
    var addSausage = document.getElementById("toppingone");
    if(addSausage.checked == true);{
        sausage = 140
    } return parseInt (sausage);
}
function onions(){
    var onions = 0;
    var addOnions = document.getElementById("toppingone");
    if(addOnions.checked == true);{
        onion = 130
    } return parseInt (onion);
}

