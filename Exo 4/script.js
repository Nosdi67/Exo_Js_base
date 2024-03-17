const box = document.querySelectorAll('.box');
const text = document.querySelectorAll('.text');
const background = document.querySelector('.boxBlock');
const facebook = document.querySelector('.fa-brands.fa-facebook.fa-2xl');
const twitter = document.querySelector('.fa-brands.fa-twitter.fa-2xl');
const instagram = document.querySelector('.fa-brands.fa-instagram.fa-2xl');

const logoArray = [facebook, twitter, instagram];
const boxStyle = [];
const textStyle = [];
let activeBoxIndex = null;
background.style.backgroundColor='grey';

for (let i = 0; i < box.length; i++) {
    const style = window.getComputedStyle(box[i]);
    boxStyle.push(style);//inserer les styles des box dans un tableau
}

for (let i = 0; i < text.length; i++) {
    const style = window.getComputedStyle(text[i]);
    textStyle.push(style);//inserer les styles des text dans un tableau
}

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function() {
        if (activeBoxIndex !== null) {
            // Si la boîte cliquée est déjà active, la désactiver
            if (activeBoxIndex === i) {
                box[activeBoxIndex].style.transform = '';
                box[activeBoxIndex].style.transition = '1s';
                box[activeBoxIndex].style.borderRadius = '20px';
                box[activeBoxIndex].style.boxShadow = '';
                text[activeBoxIndex].style.opacity = '0';
                logoArray[activeBoxIndex].style.transform = 'rotate(0deg)';
                background.style.backgroundColor='grey';
                // Réinitialiser l'index de la boîte active
                activeBoxIndex = null;
               
            }
            // Désactiver la boîte précédemment activée
            box[activeBoxIndex].style.transform = '';
            box[activeBoxIndex].style.transition = '1s';
            box[activeBoxIndex].style.borderRadius = '20px';
            box[activeBoxIndex].style.boxShadow = '';
            text[activeBoxIndex].style.opacity = '0';
            logoArray[activeBoxIndex].style.transform = 'rotate(0deg)';
        }

        // Activer la nouvelle boîte
        const back = boxStyle[i].backgroundColor;
        this.style.transform = 'translateY(-20px)';
        this.style.transition = '1s';
        this.style.borderRadius = '60px';
        this.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
        text[i].style.opacity = '1';
        logoArray[i].style.transform = 'rotate(360deg)';
        background.style.backgroundColor = back;

        // Mettre à jour l'index de la boîte active
        activeBoxIndex = i;
    });
}
