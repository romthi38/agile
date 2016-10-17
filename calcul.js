//addition la variable n1 avec n2
function addition(n1,n2){
    ajouterHistorique(n1 + ' + ' + n2);
    return n1 + n2;
}

//soustraction de la variable n1 par n2
function soustraction(n1,n2){
    ajouterHistorique(n1 + ' - ' + n2);
    return n1 - n2;
}

//division de la variable n1 par n2
function diviser(n1,n2){
    if(n2 != 0){
        ajouterHistorique(n1 + ' ÷ ' + n2);
        return n1 / n2;
    }else{
        return '∞';
    }
}

//multiplie la variable n1 par n2
function multiplier(n1,n2){
    ajouterHistorique(n1 + ' x ' + n2);
    return n1 * n2;
}

//racine carrée
function racineCarree(n1){
    ajouterHistorique('√'+ n1);
    return Math.sqrt(n1);
}

//logarithmes
function logarithmes(n1){
    ajouterHistorique('log('+ n1 + ')');
    return Math.log(n1);
}

//exponentielles
function exponentielles(n1){
    ajouterHistorique('exp('+ n1 + ')');
    return Math.exp(n1);
}

