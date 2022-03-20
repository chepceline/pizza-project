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
function tikkaSauce(){
    var tikkaSauce = 0;
    var addtikkaSauce = document.getElementById("toppingone");
    if(addtikkaSauce.checked == true);{
        tikkaSauce = 120
    } return parseInt (tikkaSauce);
}
function mozarellaCheese(){
    var mozarellaCheese = 0;
    var addmozarellaCheese = document.getElementById("toppingone");
    if(addmozarellaCheese.checked == true);{
        cheese = 110;
    } return parseInt(cheese);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}



// Delivery form inputs and alerts



$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria.");
        // $(this).get(0).reset();
        //  event.preventDefault();
    });
    
});