var resultat = null, nombre_courant = document.getElementById('resultat');
var operateur = document.getElementsByClassName('operation'), bt_number = document.getElementsByClassName('valeur');

window.onload = function(){
    for(var i = 0 ; i < operateur.lenght ; i++){
        operateur[i].addEventListener('click', click_operation);
    }
    
    for(var i = 0 ; i < bt_number.lenght ; i++){
        bt_number[i].addEventListener('click', click_number);
    }
}

window.onload = function(){
    var histo = document.getElementById("historique"); //fonction permettant d'ajouter à l'historique
    function ajouterHistorique(chaine){
        histo.value = chaine+histo.value;
    }
    
function click_number(){
        var res = document.getElementById("resultat");
        res = res + button.value;
    }  
}

function click_operation(){
    switch(this.value)
        {
        
            case "+":
                resultat = addition(resultat, nombre_courant);
                break;
            case "-":
                resultat = soustraction(resultat, nombre_courant);
                break;
            case "x":
                resultat = multiplier(resultat, nombre_courant);
                break;
            case "/":
                resultat = diviser(resultat, nombre_courant);
                break;
            default:
                return false;
        }
    affiche();
}

function affiche(){
    nombre_courant.value = resultat;
}
