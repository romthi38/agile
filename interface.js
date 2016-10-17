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
