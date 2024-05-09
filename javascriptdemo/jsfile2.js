let amount = 400;
let promoCode = "BINGO";

if(promoCode == "JUMBO" && amount > 150){
    amount = amount - .3 * amount
    console.log("promo code applied successfully, please pay: " + amount)
}else if(promoCode == "BINGO" && amount > 300){
    amount = amount - .5 * amount
    console.log("promo code applied successfully, please pay " + amount)
}else{
    console.log("invalid promocode or amount is insufficient")
}