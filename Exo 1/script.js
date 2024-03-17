
const btn=document.querySelector('.btn');

const computedStyle =getComputedStyle(btn);


let cssProperties = "Nom de la classe: "+ btn.className + "\n"+
                    "Coulerus du fonds: "+ computedStyle.backgroundColor + "\n"+
                    "Couleur du texte: "+ computedStyle.color + "\n"+
                    "Hauteur: "+ computedStyle.height + "\n"+
                    "Largeur: "+computedStyle.width + "\n"+
                    "Display: "+computedStyle.display + "\n"+
                    "Aligner le text: "+computedStyle.textAlign + "\n";


btn.onclick=function afficherInfo(){

    alert(cssProperties);
};




