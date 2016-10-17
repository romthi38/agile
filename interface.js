var resultat = null, nombre_courant = document.getElementById('resultat');
var operateur = document.getElementsByClassName('operation');

window.onload = function(){
    var histo = document.getElementById("historique"); //fonction permettant d'ajouter à l'historique
    function ajouterHistorique(chaine){
        histo.value = chaine+histo.value;
    }
    
    var buttonBg = document.getElementsByID("selectBg").value;
    switch(buttonBg){
        case "aucun":
            document.getElementById("calculatrice").style.backgroundColor = "white";
            break;
        case "chat":
            document.getElementById("calculatrice").style.background = "url('http://www.chatsbio.com/wp-content/uploads/2014/07/chat-mignon.jpg')";
            break;
        case "pokemeon":
            document.getElementById("calculatrice").style.background = "url('http://media.melty.fr/article-3206746-fb/pokemon-bebe-pokemon-pre-evolution-pichu.jpg')";
    }
    
function click_number(){
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
