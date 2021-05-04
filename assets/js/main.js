//Il programma dovrà consentire di calcolare il prezzo del panino
//selezionando o deselezionando gli ingredienti proposti.

// Funzione al click del button
function yourBurger() {
    //Prezzo base panino + lista degli ingredienti e il loro prezzo
    var base_price = 2.99;
    var ingredients = [
        ['cheese', '2'],
        ['egg', '3'],
        ['mustard', '0.5'],
        ['tomato', '1'],
        ['lettuce', '1'],
        ['ketchup', '0.5'],
    ]

    //Seleziono tutti i checkbox e li salvo in una variabile
    var checkbox = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < ingredients.length; i++) {
        //Ogni ingrediente lo salvo in una variabile
        var ncheck = document.querySelector(`input[name='${ingredients[i][0]}']`);
        //Salvo anche il prezzo (dato nella variabile ingredients) in una variabile
        var ingredient_price = Number(ingredients[i][1]);
        //Controllo se e quale checkbox è segnata, se segnata somma al prezzo base, il prezzo di quell'ingrediente
        if (ncheck.checked) {
            base_price += ingredient_price;
            //modifica prezzo del panino per ogni ingrediente segnato
        } else {
        }
    }


    var coupon_list = ["SCONTO30"];
    var coupon_input = document.querySelector("input[name='coupon']").value;
    if (coupon_list.includes(coupon_input)) {
        var prezzo_finale = base_price - ((base_price * 30) / 100);
        console.log(prezzo_finale.toFixed(2));
    } else {
        console.log(base_price.toFixed(2));
    }
}