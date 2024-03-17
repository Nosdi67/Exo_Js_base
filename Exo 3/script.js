const box=document.querySelectorAll('.box');
const boxStyleArray=[];//tableau vide pour stocker les attributs CSS de de lasse box
let rotation=false//rotation OFF

for(let i=0;i<box.length;i++){//un for pour stocker dans le tableau les attributs css

    const style=window.getComputedStyle(box[i]);//recuperer e style via getComputed de box + i
    boxStyleArray.push(style);//pousser le style qui contient tout les getComputed de tout les box dans le tableau
}

for(let i=0;i<box.length;i++){//pour tout les boxes,

    box[i].onclick=function boom(){//au click, lancer la function boom

    if(!rotation){//si rotation ON, donc si different(!) de rotation

        this.style.backgroundColor='black';//changer la couleur du fond en noir
        this.style.transform='rotate(360deg)';//tourner 360°
        this.style.scale='0.9'//diminuer de 10%
    }else{//si non
        this.style.backgroundColor='';//laisser la couleur tel qu'elle est
        this.style.transform='rotate(0deg)';// retourner en arriere
        this.style.scale=''// remettre la bonne dimenssion
    }
       rotation=!rotation; //remttre OFF la rotation

    };
}





