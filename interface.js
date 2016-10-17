var resultat = null, nombre_courant = document.getElementById('resultat');
var operateur = document.getElementsByClassName('operation');

window.onload = function(){
    var histo = document.getElementById("historique"); //fonction permettant d'ajouter à l'historique
    function ajouterHistorique(chaine){
        histo.value = chaine+histo.value;
    }
    
var button = document.getElementsByTagName("button");
    button.onclick = function(){
        var res = document.getElementById("resultat");
        res = res + button.value;
    }  
}

operateur.onclick = function(){
    switch(this.value)
        {
        
            case "+"
                    resultat = addition(resultat, nombre_courant);
                    break;
            case "-"
                    resultat = soustraction(resultat, nombre_courant);
                    break;
            case "x"
                    resultat = multiplier(resultat, nombre_courant);
                    break;
            case "/"
                    resultat = diviser(resultat, nombre_courant);
                    break;
        }
}
